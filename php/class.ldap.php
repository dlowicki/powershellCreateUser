<?php

function _searchADUser($filters) {
    try {
        if ($filters !== null) {
            $sn = utf8_decode($filters->name);
            $givenName = utf8_decode($filters->firstName);
            $employeeId = $filters->id;
        } else {
            $sn = '';
            $givenName = '*';
            $employeeId = '';
        }
        $pattern = '(&';

        if ($givenName !== '') {
            $pattern .= '(givenName='.$givenName.')';
        }

        if ($sn !== '') {
            $pattern .= '(sn='.$sn.')';
        }

        if ($employeeId !== '') {
            $pattern .= '(employeeid='.$employeeId.')';
        }

        $pattern .= ')';

        $con = ldap_connect($this->ldap->connection);
        ldap_bind($con, $this->ldap->username, $this->ldap->password);

        $result = ldap_search($con, $this->ldap->dn, $pattern);
        $userInfo = ldap_get_entries($con, $result);

        if ($userInfo['count'] === 0) {
            throw new ErrorException('Die Suche lieferte keine Ergebnisse.');
        }

        $return = [];

        for ($i = 0; $i < $userInfo['count']; $i++) {
            if (array_key_exists('sn', $userInfo[$i])) {
                $name = $userInfo[$i]['sn'][0];
            } else {
                $name = '--';
            }
            if (array_key_exists('givenname', $userInfo[$i])) {
                $vorname = $userInfo[$i]['givenname'][0];
            } else {
                $vorname = '--';
            }               

            // Ausweisnummer auslesen
            if (isset($userInfo[$i]['employeeid'])) {
                $ausweisnr = $userInfo[$i]['employeeid'][0];
            } else {
                $ausweisnr = '--';
            }

            // Gültigkeitsdatum auslesen
            if (isset($userInfo[$i]['accountexpires'])) {
                if($userInfo[$i]['accountexpires'][0] !== '0' && $userInfo[$i]['accountexpires'][0] !== '9223372036854775807') {
                    $accExp = floatval($userInfo[$i]['accountexpires'][0]);
                    $floatDate = $accExp/1.E7-11644473600;
                    $intDate = intval($floatDate);
                    $valid = date('d.m.Y', $intDate);
                } else {
                    // 31. Dezember des laufenden Jahres wenn kein Datum gesetzt
                    $valid = date('d.m.Y', strtotime('12/31'));
                }
            } else {
                $valid = date('d.m.Y', strtotime('12/31'));
            }

            // Funktion auslesen
            if (isset($userInfo[$i]['title'][0])) {
                $title = $userInfo[$i]['title'][0];
            } else {
                $title = '--';
            }

            // Benutzername auslesen
            if (isset($userInfo[$i]['samaccountname'][0])) {
                $username = $userInfo[$i]['samaccountname'][0];
            } else {
                $username = '--';
            }

            require_once 'PHP/IDCardCreator_ImageManipulator.php';
            $img = new IDCardCreator_ImageManipulator();

            // Anzeigebild auslesen
            if (isset($this->ldap->picturepath) && isset($userInfo[$i]['samaccountname'][0])) {
                if (is_file($this->ldap->picturepath.'\\'.$userInfo[$i]['samaccountname'][0].'.jpg')) {
                    copy($this->ldap->picturepath.'\\'.$userInfo[$i]['samaccountname'][0].'.jpg', 'userImages/'.$userInfo[$i]['samaccountname'][0].'.jpg');
                    $path = 'userImages/'.$userInfo[$i]['samaccountname'][0].'.jpg';
                } else {
                    // Pfad des Platzhalterbildes übergeben
                    $this->_writeLog('Datei '.$this->ldap->picturepath.'\\'.$userInfo[$i]['samaccountname'][0].'.jpg nicht gefunden.');
                    $path = 'img/noimg.png';
                }
            } else {
                if (isset($userInfo[$i]['thumbnailphoto']) && $filters !== null) {
                    $imgString = $userInfo[$i]['thumbnailphoto'][0];
                    $img->saveImg($name, $vorname, $imgString);
                    // Pfad des Bildes übergeben
                    $path = 'userImages/'.$name . '_' . $vorname . '.jpg';
                } else {
                    // Pfad des Platzhalterbildes übergeben
                    $path = 'img/noimg.png';
                }
            }

            $results = array(
                // Umlaute korrekt codieren
                'Name' => utf8_encode($name),
                'Vorname' => utf8_encode($vorname),
                'Funktion' => utf8_encode($title),
                'Gültigkeit' => $valid,
                'ID' => $ausweisnr,
                'Pfad' => utf8_encode($path)
            );
            $return[] = $results;
        }

        // Array alphabetisch sortieren
        usort($return, function($a, $b) {
            return $a['Name'] < $b['Name'] ? -1 : 1;
        });
    } catch (Throwable $ex) {
        $return = $ex;
    }
    return $return;
}

?>
<?php

if(isset($_POST['saveData']) && isset($_POST['filename'])){
    $data = $_POST['saveData'];
    echo "[SYNC] Daten wurden erfolgreich empfangen";
    
    $handle = "";
	if(file_exists('../data/' . $_POST['filename'] . '.txt')){
        $handle = fopen('../data/' . $_POST['filename'] . '.txt','w');
    } else {
        $uuid = createUUID();
	    $handle = fopen('../data/' . $uuid . '.txt','w');
    }

    // Wenn schreiben erfolgreich Ausgabe geben, damit Javascript bescheid weiß
	if(fwrite($handle, $data)){ echo "1"; }
	fclose($handle);
}

function createUUID(){ return vsprintf('%s%s%s%s', str_split(bin2hex(random_bytes(12)), 3));}
?>
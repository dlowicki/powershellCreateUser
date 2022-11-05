<?php

$file = file_get_contents("data.json");
if ($file === false) { echo 'Datei data.json konnte nicht geladen werden!'; }
$json_a = json_decode($file, true);
if ($json_a === null) { echo 'Konnte Inhalt von data.json nicht laden!'; }

foreach ($json_a as $arfirma) {
    print_r($arfirma['ar-firma']);
}

?>
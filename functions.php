<?php

$file = file_get_contents("data.json");
if ($file === false) { echo 'Datei data.json konnte nicht geladen werden!'; }
$json = json_decode($file, true);
if ($json === null) { echo 'Konnte Inhalt von data.json nicht laden!'; }

print_r($json['ar-Standort']);


?>
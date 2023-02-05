<?php

if(isset($_POST['saveData'])){
    $data = $_POST['saveData'];
    echo "[SYNC] Daten wurden erfolgreich empfangen";
    $uuid = createUUID();
	if(!file_exists('../data/' . $uuid . '.txt')){ $uuid=createUUID(); }
	$handle = fopen('../data/' . $uuid . '.txt','w');
    // Wenn schreiben erfolgreich Ausgabe geben, damit Javascript bescheid weiß
	if(fwrite($handle, $data)){ echo "1"; }
	fclose($handle);
}

function createUUID(){ return vsprintf('%s%s%s%s', str_split(bin2hex(random_bytes(12)), 3));}
?>
<?php
// Get UUID from loadData.js und durchsuche data Ordner nach txt Datei | Wenn gefunden echo Daten für loadData.js
if(isset($_GET['uniqueData'])){
	if(strlen($_GET['uniqueData']) == 12){
		$udid = $_GET['uniqueData'];
		if(!file_exists('../data/' . $udid . '.txt')){ echo false; return; }
		$handle = fopen('../data/' . $udid . '.txt','r');
		$line = fgets($handle);
		echo $line;
		fclose($handle);
	}
}





?>
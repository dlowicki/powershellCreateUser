<?php
if(isset($_GET['uniqueData'])){
	if(strlen($_GET['uniqueData']) == 12){
		$udid = $_GET['uniqueData'];
		$handle = fopen('data/' . $udid . '.txt','r');
		$line = fgets($handle);
		echo $line;
		fclose($handle);
	}
}

?>
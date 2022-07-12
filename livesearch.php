<?php

$xmlDoc = new DOMDocument();
$xmlDoc->load("data/data.xml");

$x = $xmlDoc->getElementsByTagName('user');

//get the q parameter from URL
$q = $_GET["q"];
$type = $_GET["type"]; // type = r (remove) or c (configure)
$functionName = '';
if($type == 'r'){ $functionName = 'fillDataRemove'; } else { $functionName = 'fillDataBearbeiten'; }

//lookup all links from the xml file if length of q>0
if (strlen($q) > 0) {
  $hint="";
  for($i=0; $i<($x->length); $i++) {
    $y = $x->item($i)->getElementsByTagName('id');
    if ($y->item(0)->nodeType==1) {
      //find a link matching the search text
      if (stristr($y->item(0)->childNodes->item(0)->nodeValue,$q)) {
        if ($hint=="") {
            $st = '"' . $y->item(0)->childNodes->item(0)->nodeValue . '"';
            $hint = "<a onClick='$functionName($st)'>" . $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
        } else {
            $st = '"' . $y->item(0)->childNodes->item(0)->nodeValue . '"';
            $hint = $hint . "<a onClick='$functionName($st)'>" . $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
        }
      }
    }
  }
}


if ($hint=="") { $response="Keine Daten gefunden"; } else { $response = $hint; }
//output the response
echo $response;

?>
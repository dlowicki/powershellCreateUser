$.getJSON("data.json", function(data){
  var items = [];
  $.each( data, function(key,val){
    items[key] = val;
  });

  console.log(items);
  
  $('#widget').empty();
  $('#widget').append('<div class="container-small" id="cs1"></div>');
  $('#widget').append('<div class="container-small" id="cs2"></div>');
  $('#widget').append('<div class="container-small" id="cs3"></div>');
  $('#widget').append('<div class="container-small" id="cs4"></div>');
  $('#widget').append('<div class="container-small" id="cs5"></div>');
  $('#widget').append('<div class="container-small" id="cs6"></div>');
  $('#widget').append('<div class="container-small" id="cs7"></div>');


  // Lade Container 1 // Personen-Daten
  $('#cs1').append('<div class="container-headline" id="cs1-headline"><h3>Personen-Daten</h3></div>');
  $('#cs1').append('<div class="m-flex-wrap"></div>');
  $('#cs1 .m-flex-wrap').append('<div class="m-textbox" id="tb_vorname"><label>Vorname</label><input type="text" id="m_vn" placeholder="Vorname"></div>');
  $('#cs1 .m-flex-wrap').append('<div class="m-textbox" id="tb_nachname"><label>Nachname</label><input type="text" id="m_nn" placeholder="Nachname"></div>');
  $('#cs1 .m-flex-wrap').append('<div class="m-textbox" id="tb_nachname"><label>Eintrittsdatum</label><input type="date" id="m_date" placeholder="Datum"></div>');

  // Lade Container 2 // Firmen-Daten
  $('#cs2').append('<div class="container-headline" id="cs2-headline"><h3>Firmen-Daten</h3></div>');
  $('#cs2').append('<div class="m-flex-wrap"></div>');
  $('#cs2 .m-flex-wrap').append('<div class="m-dropdown" id="dd_firma"><label>Firma</label><select id="firma"></select></div>');
  $.each(items['ar-firma'], function(key,val){
    $('#firma').append('<option value="'+val+'">'+val+'</option>');
  });
  $('#cs2 .m-flex-wrap').append('<div class="m-dropdown" id="dd_standort"><label>Standort</label><select id="standort"></select></div>');
  $.each(items['ar-Standort'], function(key,val){
    $('#standort').append('<option value="'+val+'">'+val+'</option>');
  });
  $('#cs2 .m-flex-wrap').append('<div class="m-dropdown" id="dd_abteilung"><label>Abteilung</label><select id="abteilung"></div>');
  $.each(items['ar-Abteilung'], function(key,val){
    $('#abteilung').append('<option value="'+val+'">'+val+'</option>');
  });

  // Lade Container 3 // Abteilungs-Daten
  $('#cs3').append('<div class="container-headline" id="cs3-headline"><h3>Abteilungs-Daten</h3></div>');
  $('#cs3').append('<div class="m-flex-wrap"></div>');
  $('#cs3 .m-flex-wrap').append('<div class="m-textbox" id="tb_durchwahl"><label>Durchwahl</label><input type="text" id="m_dw" placeholder="Durchwahl"></div>');
  $('#cs3 .m-flex-wrap').append('<div class="m-textbox" id="tb_mobile"><label>Mobile-Nummer</label><input type="text" id="m_mn" placeholder="Mobile-Nummer"></div>');
  $('#cs3 .m-flex-wrap').append('<div class="m-dropdown" id="dd_vorgesetzter"><label>Vorgesetzter</label><select id="vorgesetzter"></select></div>');
  $.each(items['ar-Vorgesetzter'], function(key,val){
    $('#vorgesetzter').append('<option value="'+val+'">'+val+'</option>');
  });
    
  // Lade Container 4 // Hardware
  $('#cs4').append('<div class="container-headline" id="cs4-headline"><h3>Hardware</h3></div>');
  $('#cs4').append('<div class="m-flex-wrap"></div>');
  $('#cs4 .m-flex-wrap').append('<div class="m-dropdown" id="dd_pc_laptop"><label>Laptop/PC</label><select id="pc_laptop"></select></div>');
  $.each(items['ar-pc-laptop'], function(key,val){
    $('#pc_laptop').append('<option value="'+val+'">'+val+'</option>');
  });
  $('#cs4 .m-flex-wrap').append('<div class="m-dropdown" id="dd_tastatur_maus"><label>Tastatur/Maus</label><select id="tastatur_maus"></select></div>');
  $.each(items['ar-tastatur-maus'], function(key,val){
    $('#tastatur_maus').append('<option value="'+val+'">'+val+'</option>');
  });
  $('#cs4 .m-flex-wrap').append('<div class="m-dropdown" id="dd_headset"><label>Headset</label><select id="headset"></select></div>');
  $.each(items['ar-headset'], function(key,val){
    $('#headset').append('<option value="'+val+'">'+val+'</option>');
  });
  $('#cs4 .m-flex-wrap').append('<div class="m-dropdown" id="dd_monitore"><label>Monitore</label><select id="monitore"></select></div>');
  $.each(items['ar-monitore'], function(key,val){
    $('#monitore').append('<option value="'+val+'">'+val+'</option>');
  });
  $('#cs4 .m-flex-wrap').append('<div class="m-checkbox" id="cb_docking"><div class="cb"><label>Docking-Station</label><label class="switch"><input type="checkbox" id="m_gp3"><span class="slider round"></span></label></div></div>');
  $('#cs4 .m-flex-wrap').append('<div class="m-checkbox" id="cb_handy"><div class="cb"><label>Geschäfts-Handy</label><label class="switch"><input type="checkbox" id="m_gp3"><span class="slider round"></span></label></div></div>');
 


  // Lade Container 5 // Gruppen
  $('#cs5').append('<div class="container-headline" id="cs5-headline"><h3>Software</h3></div>');
  $('#cs5').append('<div class="m-flex-wrap" id="cb_software"></div>');
  var counter = 1;
  $.each(items['ar-software'], function(key,val){
    $('#cb_software').append('<div class="m-checkbox"><div class="cb"><label>'+val+'</label><label class="switch"><input type="checkbox" id="m_gp'+counter+'"><span class="slider round"></span></label></div></div>');
    counter++;
  });

  // Lade Container 6 // Office-Paket
  $('#cs6').append('<div class="container-headline" id="cs6-headline"><h3>Office-Paket</h3></div>');
  $('#cs6').append('<div class="m-flex-wrap"></div>');
  $('#cs6 .m-flex-wrap').append('<div class="m-checkbox" id="cb_lizenz"><div class="cb"><label>Office Basic</label><label class="switch"><input type="checkbox" class="officeLic" id="m_licBasic"><span class="slider round"></span></label></div><div class="cb"><label>Office Premium</label><label class="switch"><input type="checkbox" class="officeLic" id="m_licPremium"><span class="slider round"></span></label></div></div>');    


  //Lade Container 7 // Kommentar
  $('#cs7').append('<div class="container-headline" id="cs7-headline"><h3>Kommentar</h3></div>');
  $('#cs7').append('<textarea id="m-textarea" resize="false"></textarea>');

  // Lade Buttons
  $('#widget').append('<div class="container-buttons"></div>');
  $('.container-buttons').append('<button id="bt_zs" onclick="clearAll()">Zurücksetzen</button>');
  $('.container-buttons').append('<button id="bt_link">Link erstellen</button>');
  $('.container-buttons').append('<button id="bt_en" onclick="sendData()">EDV Senden</button>');
  

})
.fail(function(){
  console.log('[Error] Konnte Datei data.json nicht lesen');
});

function loadBearbeiten() {
    $('#widget').empty();
    $('#widget').append('<div class="container-livesearch" id="ls"></div>');
    // Lade Container Livesearch
    $('#ls').append('<div class="m-livesearch"><label>Suche</label><input type="text" id="m_livesearch" placeholder="Suche" size="30" onkeyup="showResult(this.value)"><div id="livesearch"></div></div>');
}

function showResult(str) {
    // Keine Eingabe in Input Feld // Input Feld zurücksetzen
    if (str.length==0) { document.getElementById("livesearch").innerHTML=""; document.getElementById("livesearch").style.border="0px"; return; }
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
        document.getElementById("livesearch").innerHTML=this.responseText;
        document.getElementById("livesearch").style.border="1px solid darkgray";
      }
    }
    xmlhttp.open("GET","livesearch.php?q="+str+"&type=c",true);
    xmlhttp.send();
}

function fillDataBearbeiten(str) {
    const dc = document.querySelectorAll('div.container-small').length > 0;
    if(dc == false){
        // Lade Daten mit str (str = id)
        $('#widget').append('<div class="container-small" id="cs1"></div>');
        $('#cs1').append('<h3>Personen-Daten</h3>');
        $('#cs1').append('<div class="m-textbox" id="tb_vorname"><label>Vorname</label><input type="text" id="m_vn" placeholder="Vorname" value="'+ str +'"></div>');
        $('#cs1').append('<div class="m-textbox" id="tb_nachname"><label>Nachname</label><input type="text" id="m_nn" placeholder="Nachname"></div>');
    
        // Lade Container 2
        $('#widget').append('<div class="container-small" id="cs2"></div>');
        $('#cs2').append('<div class="m-dropdown" id="dd_firma"><label>Firma</label><select id="firma"><option value="SJ">Schrauben-Jäger</option><option value="WJ">Werkzeug-Jäger</option></select></div>');
        $('#cs2').append('<div class="m-dropdown" id="dd_standort"><label>Standort</label><select id="standort"><option value="karlsruhe">Karlsruhe</option><option value="illingen">Illingen</option><option value="landsberg">Landsberg</option><option value="maulburg">Maulburg</option><option value="viernheim">Viernheim</option><option value="willstaett">Willstätt</option></select></div>');
    
        // Lade Container 3
        $('#widget').append('<div class="container-small" id="cs3"></div>');
        $('#cs3').append('<div class="m-textbox" id="tb_durchwahl"><label>Durchwahl</label><input type="text" id="m_dw" placeholder="Durchwahl"></div>');
        $('#cs3').append('<div class="m-textbox" id="tb_mobile"><label>Mobile-Nummer</label><input type="text" id="m_mn" placeholder="Mobile-Nummer"></div>');
        $('#cs3').append('<div class="m-dropdown" id="dd_vorgesetzter"><label>Vorgesetzter</label><select id="vorgesetzter"><option value="Vorgesetzter 1">vorgesetzter 1</option><option value="Vorgesetzter 2">Vorgesetzter 2</option><option value="Vorgesetzter 3">Vorgesetzter 3</option><option value="Vorgesetzter 4">Vorgesetzter 4</option><option value="Vorgesetzter 5">Vorgesetzter 5</option><option value="Vorgesetzter 6">Vorgesetzter 6</option></select></div>');
        

        // Lade Container 4
        $('#widget').append('<div class="container-small" id="cs4"></div>');
        $('#cs4').append('<div class="m-checkbox" id="cb_gruppen"><div class="cb"><label>Gruppe1</label><label class="switch"><input type="checkbox" id="m_gp1"><span class="slider round"></span></label></div><div class="cb"><label>Gruppe2</label><label class="switch"><input type="checkbox" id="m_gp2"><span class="slider round"></span></label></div></div>');
    
        // Lade Container 5
        $('#widget').append('<div class="container-small" id="cs5"></div>');
        $('#cs5').append('<div class="m-checkbox" id="cb_lizenz"><div class="cb"><label>Office Basic</label><label class="switch"><input type="checkbox" class="officeLic" id="m_licBasic"><span class="slider round"></span></label></div><div class="cb"><label>Office Premium</label><label class="switch"><input type="checkbox" class="officeLic" id="m_licPremium"><span class="slider round"></span></label></div></div>');    
    
    
        // Lade Buttons
        $('#widget').append('<div class="container-buttons"><button id="bt_zs" onclick="clearAll()">Zurücksetzen</button><button id="bt_en" onclick="sendData()">Erstellen</button></div>');
    
    } else {
        // Already exist, Change Values
    }
}

function loadEntfernen() {
    $('#widget').empty();

    $('#widget').append('<div class="container-livesearch" id="ls"></div>');
    $('#ls').append('<div class="m-livesearch"><label>Suche</label><input type="text" id="m_livesearch" placeholder="Suche" size="30" onkeyup="showResultRemove(this.value)"><div id="livesearch"></div>');

    $('#widget').append('<div class="container-small" id="cs1"></div>');
    $('#cs1').append('<ul class="ul-remove"><li>david.lowicki</li><li>david.lowicki@schrauben-jaeger.de</li></ul><button class="button-activate">Aktivieren</button><button class="button-remove">Löschen</button>');
}

function showResultRemove(str) {
    // Keine Eingabe in Input Feld // Input Feld zurücksetzen
    if (str.length==0) { document.getElementById("livesearch").innerHTML=""; document.getElementById("livesearch").style.border="0px"; return; }
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
        document.getElementById("livesearch").innerHTML=this.responseText;
        document.getElementById("livesearch").style.border="1px solid darkgray";
      }
    }
    xmlhttp.open("GET","livesearch.php?q="+str+"&type=r",true);
    xmlhttp.send();
}




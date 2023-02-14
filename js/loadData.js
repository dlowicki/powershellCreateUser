$(document).ready(function(){
  // Sicherheitscookie setzen und abfragen. Ansonsten wird Benutzerverwaltung nicht geladen
  
});

var cURL = new URL(window.location.href);
if(window.location.href.includes('index.html')) {

  $.getJSON("data.json", function(data){
    var items = [];
    $.each( data, function(key,val){
      items[key] = val;
    });

    var link = new String(cURL.searchParams.get("edit"));
    var editMode = false;
    if(link != "null"){ if(link.length == 12){ editMode = true; } }
  
    console.log('[JSON] Lade JSON Daten'); 
    
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
    $('#cs1 .m-flex-wrap').append('<div class="m-textbox" id="tb_vorname"><label>Vorname</label><input type="text" data-id="m-1" id="m_vn" placeholder="Vorname"></div>');
    $('#cs1 .m-flex-wrap').append('<div class="m-textbox" id="tb_nachname"><label>Nachname</label><input type="text" data-id="m-2" id="m_nn" placeholder="Nachname"></div>');
    $('#cs1 .m-flex-wrap').append('<div class="m-textbox" id="tb_nachname"><label>Eintrittsdatum</label><input type="date" data-id="m-3" id="m_date" placeholder="Datum"></div>');
  
    // Lade Container 2 // Firmen-Daten
    $('#cs2').append('<div class="container-headline" id="cs2-headline"><h3>Firmen-Daten</h3></div>');
    $('#cs2').append('<div class="m-flex-wrap"></div>');
    $('#cs2 .m-flex-wrap').append('<div class="m-dropdown" id="dd_firma"><label>Firma</label><select data-id="m-4" id="firma"></select></div>');
    $.each(items['ar-firma'], function(key,val){
      $('#firma').append('<option value="'+val+'">'+val+'</option>');
    });
    $('#cs2 .m-flex-wrap').append('<div class="m-dropdown" id="dd_standort"><label>Standort</label><select data-id="m-5" id="standort"></select></div>');
    $.each(items['ar-Standort'], function(key,val){
      $('#standort').append('<option value="'+val+'">'+val+'</option>');
    });
    $('#cs2 .m-flex-wrap').append('<div class="m-dropdown" id="dd_abteilung"><label>Abteilung</label><select data-id="m-6" id="abteilung"></div>');
    $.each(items['ar-Abteilung'], function(key,val){
      $('#abteilung').append('<option value="'+val+'">'+val+'</option>');
    });
  
    // Lade Container 3 // Abteilungs-Daten
    $('#cs3').append('<div class="container-headline" id="cs3-headline"><h3>Abteilungs-Daten</h3></div>');
    $('#cs3').append('<div class="m-flex-wrap"></div>');
    $('#cs3 .m-flex-wrap').append('<div class="m-textbox" id="tb_durchwahl"><label>Durchwahl</label><input type="text" data-id="m-7" id="m_dw" placeholder="Durchwahl"></div>');
    $('#cs3 .m-flex-wrap').append('<div class="m-textbox" id="tb_mobile"><label>Mobile-Nummer</label><input type="text" data-id="m-8" id="m_mn" placeholder="Mobile-Nummer"></div>');
    $('#cs3 .m-flex-wrap').append('<div class="m-dropdown" id="dd_vorgesetzter"><label>Vorgesetzter</label><select data-id="m-9" id="vorgesetzter"></select></div>');
    $.each(items['ar-Vorgesetzter'], function(key,val){
      $('#vorgesetzter').append('<option value="'+val+'">'+val+'</option>');
    });
      
    // Lade Container 4 // Hardware
    $('#cs4').append('<div class="container-headline" id="cs4-headline"><h3>Hardware</h3></div>');
    $('#cs4').append('<div class="m-flex-wrap"></div>');
    $('#cs4 .m-flex-wrap').append('<div class="m-dropdown" id="dd_pc_laptop"><label>Laptop/PC</label><select data-id="m-10" id="pc_laptop"></select></div>');
    $.each(items['ar-pc-laptop'], function(key,val){
      $('#pc_laptop').append('<option value="'+val+'">'+val+'</option>');
    });
    $('#cs4 .m-flex-wrap').append('<div class="m-dropdown" id="dd_tastatur_maus"><label>Tastatur/Maus</label><select data-id="m-11" id="tastatur_maus"></select></div>');
    $.each(items['ar-tastatur-maus'], function(key,val){
      $('#tastatur_maus').append('<option value="'+val+'">'+val+'</option>');
    });
    $('#cs4 .m-flex-wrap').append('<div class="m-dropdown" id="dd_headset"><label>Headset</label><select data-id="m-12" id="headset"></select></div>');
    $.each(items['ar-headset'], function(key,val){
      $('#headset').append('<option value="'+val+'">'+val+'</option>');
    });
    $('#cs4 .m-flex-wrap').append('<div class="m-dropdown" id="dd_monitore"><label>Monitore</label><select data-id="m-13" id="monitore"></select></div>');
    $.each(items['ar-monitore'], function(key,val){
      $('#monitore').append('<option value="'+val+'">'+val+'</option>');
    });
    $('#cs4 .m-flex-wrap').append('<div class="m-checkbox" id="cb_docking"><div class="cb"><label>Docking-Station</label><label class="switch"><input type="checkbox" id="m-14"><span class="slider round"></span></label></div></div>');
    $('#cs4 .m-flex-wrap').append('<div class="m-checkbox" id="cb_handy"><div class="cb"><label>Geschäfts-Handy</label><label class="switch"><input type="checkbox" id="m-15"><span class="slider round"></span></label></div></div>');
    $('#cs4 .m-flex-wrap').append('<div class="m-checkbox" id="cb_telefon"><div class="cb"><label>Stand-Telefon</label><label class="switch"><input type="checkbox" id="m-16"><span class="slider round"></span></label></div></div>');
    $('#cs4 .m-flex-wrap').append('<div class="m-checkbox" id="cb_homeoffice"><div class="cb"><label>Homeoffice</label><label class="switch"><input type="checkbox" id="m-17"><span class="slider round"></span></label></div></div>');
   
  
  
    // Lade Container 5 // Gruppen
    $('#cs5').append('<div class="container-headline" id="cs5-headline"><h3>Software</h3></div>');
    $('#cs5').append('<div class="m-flex-wrap" id="cb_software"></div>');
    var counter = 1;
    $.each(items['ar-software'], function(key,val){
      $('#cb_software').append('<div class="m-checkbox"><div class="cb"><label>'+val+'</label><label class="switch"><input type="checkbox" id="sw-'+counter+'" class="sw-item"><span class="slider round"></span></label></div></div>');
      counter++;
    });
  
    // Lade Container 6 // Office-Paket
    $('#cs6').append('<div class="container-headline" id="cs6-headline"><h3>Office-Paket</h3></div>');
    $('#cs6').append('<div class="m-flex-wrap"></div>');
    $('#cs6 .m-flex-wrap').append('<div class="m-checkbox" id="cb_lizenz"></div>');    
    var counter = 1;
    $.each(items['ar-office'], function(key,val){
      $('#cb_lizenz').append('<div class="cb"><label>'+val+'</label><label class="switch"><input type="checkbox" class="officeLic" id="lic-'+counter+'"><span class="slider round"></span></label></div>');
      counter++;
    });
  
    //Lade Container 7 // Kommentar
    $('#cs7').append('<div class="container-headline" id="cs7-headline"><h3>Kommentar</h3></div>');
    $('#cs7').append('<textarea id="m-textarea" resize="false"></textarea>');
  
    // Lade Buttons
    $('#widget').append('<div class="container-buttons"></div>');
    $('.container-buttons').append('<button id="bt_zs" onclick="clearAll()">Zurücksetzen</button>');
    if(editMode == true){
        $('.container-buttons').append('<button id="bt_link" onClick="updateFile()">Eintritt aktualisieren</button>');
    } else {
        $('.container-buttons').append('<button id="bt_link" onClick="updateFile()">Eintritt erstellen</button>');
    }
    $('.container-buttons').append('<button id="bt_en" onclick="sendData()">An EDV Senden</button>');

    if(editMode == true){
      // link = GET edit Parameter from URL
      var ajaxObj = loadEditData(link);       // loadEditData = get data from file at data Directory 
      var ajaxResponse = ajaxObj.responseText;
      // Wenn ajaxResponse == true | Datei existiert
      if(ajaxResponse) {
        var splitted = ajaxResponse.split(';');

        $('#cs1 input[data-id="m-1"]').val(splitted[0]);                                    // Statisch - Vorname
        $('#cs1 input[data-id="m-2"]').val(splitted[1]);                                    // Statisch - Nachname
        $('#cs1 input[data-id="m-3"]').val(splitted[2]);                                    // Statisch - Eintrittsdatum
  
        $('#cs2 select[data-id="m-4"]').val(splitted[3]);                                   // Statisch - Firma
        $('#cs2 select[data-id="m-5"]').val(splitted[4]);                                   // Statisch - Standort
        $('#cs2 select[data-id="m-6"]').val(splitted[5]);                                   // Statisch - Abteilung
  
        $('#cs3 input[data-id="m-7"]').val(splitted[6]);                                    // Statisch - Durchwahl
        $('#cs3 input[data-id="m-8"]').val(splitted[7]);                                    // Statisch - Mobile-Nummer
        $('#cs3 select[data-id="m-9"]').val(splitted[8]);                                   // Statisch - Vorgesetzter
  
        $('#cs4 select[data-id="m-10"]').val(splitted[9]);                                  // Statisch - Laptop
        $('#cs4 select[data-id="m-11"]').val(splitted[10]);                                 // Statisch - Tastatur/Maus
        $('#cs4 select[data-id="m-12"]').val(splitted[11]);                                 // Statisch - Headset
        $('#cs4 select[data-id="m-13"]').val(splitted[12]);                                 // Statisch - Monitore

        $('#cs4 input[id="m-14"]').prop('checked',parseInt(splitted[13]));                  // Statisch - Docking-Station
        $('#cs4 input[id="m-15"]').prop('checked',parseInt(splitted[14]));                  // Statisch - Geschäfts-Handy
        $('#cs4 input[id="m-16"]').prop('checked',parseInt(splitted[15]));                  // Statisch - Stand-Telefon
        $('#cs4 input[id="m-17"]').prop('checked',parseInt(splitted[16]));                  // Statisch - Homeoffice
        
        
        var splSoftware = splitted[17].split('_');                                          // Dynamisch - sw-1_sw-2_sw-3
        splSoftware.forEach(element => {
          $('#cs5 input[id="'+element+'"]').prop('checked',true);
        });

        $('#'+splitted[splitted.length-2]).prop('checked',true);                            // Dynamisch - Office Lizenz = Nur einmal auswählbar
  
        $('#m-textarea').text(splitted[splitted.length-1]);                                 // Statisch - Kommentar Feld
        console.log('[Success] Daten erfolgreich verarbeitet von [Request]');
      } else {
        console.log('[Error] Fehler bei Erhalt von Daten [Request]');
      }
    }
  })
  .fail(function(){
    console.log('[Error] Konnte Datei data.json nicht lesen');
  });
}

// Send UUID to request.php to get the Data from txt file and return the data
function loadEditData(udid) {
    return $.ajax({method: "GET",url: "php/request.php",async: !1,data: { uniqueData: udid }});
}


function clearAll() {
    $('#m_vn').val('');             // Lösche Vorname
    $('#m_nn').val('');             // Lösche Nachname
    $('#m_date').val('');           // Lösche Eintrittsdatum

    $('#firma').val('Schrauben-Jäger');              // Lösche Selektierte Firma
    $('#standort').val('Karlsruhe');           // Lösche Selektierten Standort
    $('#abteilung').val('Keine Abteilung');          // Lösche Selektierte Abteilung

    $('#m_dw').val('');               // Lösche Durchwahl
    $('#m_mn').val('');               // Lösche Mobile-Nummer
    $('#vorgesetzter').val('Kein Vorgesetzter');       // Lösche Selektierten Vorgesetzten

    $('#pc_laptop').val('Kein Laptop/PC');       // Erhalte Selektierten PC/Laptop
    $('#tastatur_maus').val('Keine Tastatur/Maus');   // Erhalte Selektierte Tastatur/Maus
    $('#headset').val('Kein Headset');         // Erhalte Selektiertes Headset
    $('#monitore').val('Keine Monitore');        // Erhalte Selektierte Monitore
    $('#m-14').prop('checked',false); // Erhalte Docking-Station boolean
    $('#m-15').prop('checked',false); // Erhalte Geschäftshandy boolean
    $('#m-16').prop('checked',false); // Erhalte Stand-Telefon boolean
    $('#m-17').prop('checked',false); // Erhalte Homeoffice boolean

    $('.sw-item').each(function () { $(this).prop('checked',false) });
    $('.officeLic').each(function () { $(this).prop('checked',false) });
    $('#m-textarea').val('');

}

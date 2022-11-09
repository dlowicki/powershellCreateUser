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
    if(link){ if(link.length == 12){ editMode = true; } else {
      // Abbruch von edit, da Datei nicht existieren kann
    } }
  
    console.log('[JSON] Daten wurden geladen'); 
    
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
    $('#cs4 .m-flex-wrap').append('<div class="m-checkbox" id="cb_docking"><div class="cb"><label>Docking-Station</label><label class="switch"><input type="checkbox" data-id="m-14"><span class="slider round"></span></label></div></div>');
    $('#cs4 .m-flex-wrap').append('<div class="m-checkbox" id="cb_handy"><div class="cb"><label>Geschäfts-Handy</label><label class="switch"><input type="checkbox" data-id="m-15"><span class="slider round"></span></label></div></div>');
   
  
  
    // Lade Container 5 // Gruppen
    $('#cs5').append('<div class="container-headline" id="cs5-headline"><h3>Software</h3></div>');
    $('#cs5').append('<div class="m-flex-wrap" id="cb_software"></div>');
    var counter = 16;
    $.each(items['ar-software'], function(key,val){
      $('#cb_software').append('<div class="m-checkbox"><div class="cb"><label>'+val+'</label><label class="switch"><input type="checkbox" data-id="m-'+counter+'"><span class="slider round"></span></label></div></div>');
      counter++;
    });
  
    // Lade Container 6 // Office-Paket
    $('#cs6').append('<div class="container-headline" id="cs6-headline"><h3>Office-Paket</h3></div>');
    $('#cs6').append('<div class="m-flex-wrap"></div>');
    $('#cs6 .m-flex-wrap').append('<div class="m-checkbox" id="cb_lizenz"></div>');    
    var counter = 1;
    $.each(items['ar-office'], function(key,val){
      $('#cb_lizenz').append('<div class="cb"><label>'+val+'</label><label class="switch"><input type="checkbox" class="officeLic" id="lic'+counter+'"><span class="slider round"></span></label></div>');
      counter++;
    });
  
    //Lade Container 7 // Kommentar
    $('#cs7').append('<div class="container-headline" id="cs7-headline"><h3>Kommentar</h3></div>');
    $('#cs7').append('<textarea id="m-textarea" resize="false"></textarea>');
  
    // Lade Buttons
    $('#widget').append('<div class="container-buttons"></div>');
    $('.container-buttons').append('<button id="bt_zs" onclick="clearAll()">Zurücksetzen</button>');
    if(editMode == true){
        $('.container-buttons').append('<button id="bt_link">Link speichern</button>');
    } else {
        $('.container-buttons').append('<button id="bt_link">Link erstellen</button>');
    }
    $('.container-buttons').append('<button id="bt_en" onclick="sendData()">EDV Senden</button>');

    if(editMode == true){
      var ajaxObj = loadEditData(link);
      var ajaxResponse = ajaxObj.responseText;
      var splitted = ajaxResponse.split(';');

      $('#cs1 input[data-id="m-1"]').val(splitted[0]);
      $('#cs1 input[data-id="m-2"]').val(splitted[1]);
      $('#cs1 input[data-id="m-3"]').val(splitted[2]);

      $('#cs2 select[data-id="m-4"]').val(splitted[3]);
      $('#cs2 select[data-id="m-5"]').val(splitted[4]);
      $('#cs2 select[data-id="m-6"]').val(splitted[5]);

      $('#cs3 input[data-id="m-7"]').val(splitted[6]);
      $('#cs3 input[data-id="m-8"]').val(splitted[7]);
      $('#cs3 select[data-id="m-9"]').val(splitted[8]);

      $('#cs4 select[data-id="m-10"]').val(splitted[9]);
      $('#cs4 select[data-id="m-11"]').val(splitted[10]);
      $('#cs4 select[data-id="m-12"]').val(splitted[11]);
      $('#cs4 select[data-id="m-13"]').val(splitted[12]);
      $('#cs4 input[data-id="m-14"]').prop('checked',parseInt(splitted[13]));
      $('#cs4 input[data-id="m-15"]').prop('checked',parseInt(splitted[14]));

      $('#cs5 input[data-id="m-16"]').prop('checked',parseInt(splitted[15]));
      $('#cs5 input[data-id="m-17"]').prop('checked',parseInt(splitted[16]));
      $('#cs5 input[data-id="m-18"]').prop('checked',parseInt(splitted[17]));
      $('#cs5 input[data-id="m-19"]').prop('checked',parseInt(splitted[18]));
      $('#cs5 input[data-id="m-20"]').prop('checked',parseInt(splitted[19]));
      $('#cs5 input[data-id="m-21"]').prop('checked',parseInt(splitted[20]));
      $('#cs5 input[data-id="m-22"]').prop('checked',parseInt(splitted[21]));

      switch (splitted[22]) {
        case 'Office Premium':
          $('#lic2').prop('checked',true);
          break;
        case 'Office Basic':
          $('#lic1').prop('checked',true);
          break;
      }

      $('#m-textarea').text(splitted[23]);

      
    }

  })
  .fail(function(){
    console.log('[Error] Konnte Datei data.json nicht lesen');
  });
}

function loadEditData(udid) {
    return $.ajax({
      method: "GET",
      url: "request.php",
      async: !1,
      data: { uniqueData: udid }
    });
}


function clearAll() {
  $('#m_vn').val('');
  $('#m_nn').val('');
  $('#m_dw').val('');
  $('#m_mn').val('');
  $('#m_licBasic').prop('checked',false);
  $('#m_licPremium').prop('checked',false);
}

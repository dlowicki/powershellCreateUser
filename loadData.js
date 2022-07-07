function loadErstellen() {
    $('#widget').empty();

    $('#widget').append('<div class="container-small" id="cs1"></div><div class="container-small" id="cs2"></div><div class="container-small" id="cs3"></div><div class="container-small" id="cs4"></div><div class="container-small" id="cs5"></div>');

    // Lade Container 1
    $('#cs1').append('<div class="m-textbox" id="tb_vorname"><label>Vorname</label><input type="text" id="m_vn" placeholder="Vorname"></div>');
    $('#cs1').append('<div class="m-textbox" id="tb_nachname"><label>Nachname</label><input type="text" id="m_nn" placeholder="Nachname"></div>');

    // Lade Container 2
    $('#cs2').append('<div class="m-dropdown" id="dd_firma"><label>Firma</label><select id="firma"><option value="SJ">Schrauben-Jäger</option><option value="WJ">Werkzeug-Jäger</option></select></div>');
    $('#cs2').append('<div class="m-dropdown" id="dd_standort"><label>Standort</label><select id="standort"><option value="karlsruhe">Karlsruhe</option><option value="illingen">Illingen</option><option value="landsberg">Landsberg</option><option value="maulburg">Maulburg</option><option value="viernheim">Viernheim</option><option value="willstaett">Willstätt</option></select></div>');

    // Lade Container 3
    $('#cs3').append('<div class="m-textbox" id="tb_durchwahl"><label>Durchwahl</label><input type="text" id="m_dw" placeholder="Durchwahl"></div>');
    $('#cs3').append('<div class="m-textbox" id="tb_mobile"><label>Mobile-Nummer</label><input type="text" id="m_mn" placeholder="Mobile-Nummer"></div>');

    // Lade Container 4
    $('#cs4').append('<div class="m-dropdown" id="dd_vorgesetzter"><label>Vorgesetzter</label><select id="vorgesetzter"><option value="Vorgesetzter 1">vorgesetzter 1</option><option value="Vorgesetzter 2">Vorgesetzter 2</option><option value="Vorgesetzter 3">Vorgesetzter 3</option><option value="Vorgesetzter 4">Vorgesetzter 4</option><option value="Vorgesetzter 5">Vorgesetzter 5</option><option value="Vorgesetzter 6">Vorgesetzter 6</option></select></div>');
    $('#cs4').append('<div class="m-checkbox" id="cb_gruppen"><div class="cb"><label>Gruppe1</label><label class="switch"><input type="checkbox" id="m_gp1"><span class="slider round"></span></label></div><div class="cb"><label>Gruppe2</label><label class="switch"><input type="checkbox" id="m_gp2"><span class="slider round"></span></label></div></div>');

    // Lade Container 5
    $('#cs5').append('<div class="m-checkbox" id="cb_lizenz"><div class="cb"><label>Office Basic</label><label class="switch"><input type="checkbox" class="officeLic" id="m_licBasic"><span class="slider round"></span></label></div><div class="cb"><label>Office Premium</label><label class="switch"><input type="checkbox" class="officeLic" id="m_licPremium"><span class="slider round"></span></label></div></div>');    


    // Lade Buttons
    $('#widget').append('<div class="container-buttons"><button id="bt_zs" onclick="clearAll()">Zurücksetzen</button><button id="bt_en" onclick="sendData()">Erstellen</button></div>');
}

function loadBearbeiten() {
    $('#widget').empty();


    $('#widget').append('<div class="container-livesearch" id="ls"></div>');

    // Lade Container Livesearch
    $('#ls').append('<div class="m-livesearch" id="livesearch"><label>Suche</label><input type="text" id="m_livesearch" placeholder="Suche"></div>');


    // Lade Container 1
    //$('#widget').append('<div class="container-small" id="cs1"></div>');
    //$('#cs1').append('<div class="m-textbox" id="tb_vorname"><label>Vorname</label><input type="text" id="m_vn" placeholder="Vorname"></div>');
    //$('#cs1').append('<div class="m-textbox" id="tb_nachname"><label>Nachname</label><input type="text" id="m_nn" placeholder="Nachname"></div>');

    // Lade Container 2
    //$('#widget').append('<div class="container-small" id="cs2"></div>');
    //$('#cs2').append('<div class="m-dropdown" id="dd_firma"><label>Firma</label><select id="firma"><option value="SJ">Schrauben-Jäger</option><option value="WJ">Werkzeug-Jäger</option></select></div>');
    //$('#cs2').append('<div class="m-dropdown" id="dd_standort"><label>Standort</label><select id="standort"><option value="karlsruhe">Karlsruhe</option><option value="illingen">Illingen</option><option value="landsberg">Landsberg</option><option value="maulburg">Maulburg</option><option value="viernheim">Viernheim</option><option value="willstaett">Willstätt</option></select></div>');

    // Lade Container 3
    //$('#widget').append('<div class="container-small" id="cs3"></div>');
    //$('#cs3').append('<div class="m-textbox" id="tb_durchwahl"><label>Durchwahl</label><input type="text" id="m_dw" placeholder="Durchwahl"></div>');
    //$('#cs3').append('<div class="m-textbox" id="tb_mobile"><label>Mobile-Nummer</label><input type="text" id="m_mn" placeholder="Mobile-Nummer"></div>');

    // Lade Container 4
    //$('#widget').append('<div class="container-small" id="cs4"></div>');
    //$('#cs4').append('<div class="m-dropdown" id="dd_vorgesetzter"><label>Vorgesetzter</label><select id="vorgesetzter"><option value="Vorgesetzter 1">vorgesetzter 1</option><option value="Vorgesetzter 2">Vorgesetzter 2</option><option value="Vorgesetzter 3">Vorgesetzter 3</option><option value="Vorgesetzter 4">Vorgesetzter 4</option><option value="Vorgesetzter 5">Vorgesetzter 5</option><option value="Vorgesetzter 6">Vorgesetzter 6</option></select></div>');
    //$('#cs4').append('<div class="m-checkbox" id="cb_gruppen"><div class="cb"><label>Gruppe1</label><label class="switch"><input type="checkbox" id="m_gp1"><span class="slider round"></span></label></div><div class="cb"><label>Gruppe2</label><label class="switch"><input type="checkbox" id="m_gp2"><span class="slider round"></span></label></div></div>');

    // Lade Container 5
    //$('#widget').append('<div class="container-small" id="cs5"></div>');
    //$('#cs5').append('<div class="m-checkbox" id="cb_lizenz"><div class="cb"><label>Office Basic</label><label class="switch"><input type="checkbox" class="officeLic" id="m_licBasic"><span class="slider round"></span></label></div><div class="cb"><label>Office Premium</label><label class="switch"><input type="checkbox" class="officeLic" id="m_licPremium"><span class="slider round"></span></label></div></div>');    


    // Lade Buttons
    //$('#widget').append('<div class="container-buttons"><button id="bt_zs" onclick="clearAll()">Zurücksetzen</button><button id="bt_en" onclick="sendData()">Erstellen</button></div>');
}

function loadEntfernen() {
    $('#widget').empty();

    $('#widget').append('<div class="container-livesearch" id="ls"></div>');
    $('#ls').append('<div class="m-livesearch" id="livesearch"><label>Suche</label><input type="text" id="m_livesearch" placeholder="Suche"></div>');

    $('#widget').append('<div class="container-small" id="cs1"></div>');
    $('#cs1').append('<ul class="ul-remove"><li>david.lowicki</li><li>david.lowicki@schrauben-jaeger.de</li></ul><button class="button-activate">Aktivieren</button><button class="button-remove">Löschen</button>');
}
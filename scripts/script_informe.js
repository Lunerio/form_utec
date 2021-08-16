// Flags para cambios en divs de text
let flagComments = 0;
let flagObservaciones1 = 0;
let flagObservaciones2 = 0;
let flagConclusiones = 0;
let flagRefList = 0;
let flagMoneda = 0;
let flagDivExcluyentes = 0;
let flagDivPuntuables = 0;

// Obtener los elementos necesarios previos a funciones
let tablaCump = document.getElementById("tablaCump");
let tablaPunt = document.getElementById("tablaPunt");
let tablaEval = document.getElementById("tablaEval");


// Funcion para limpiar divs
function cleanChild(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.lastChild);
    }
};


// Generar los textboxes para los proveedores, segun su cantidad
let ofertasDiv = document.getElementById("textbox_proveedores");
let textOfertas = document.getElementById("ofertas");
textOfertas.addEventListener('input', function createOfertasText() {
    cleanChild(ofertasDiv);
    let ofertasNum = textOfertas.value;
    if (!ofertasNum) {
        cleanChild(ofertasDiv);
        cleanChild(tablaCump);
    }
    else {
        let ofertasNum = Number(textOfertas.value);
        if (ofertasNum === 0) {
            cleanChild(ofertasDiv);
            cleanChild(tablaCump);
        }
        else {
            if (ofertasNum > 15) {
                ofertasNum = 15;
            }
            for (let i = 0; i < ofertasNum ; i++) {
                let textBox = document.createElement('input');
                ofertasDiv.appendChild(textBox);
            }
        }
    }
});


// Generar los textboxes de requisitos excluyentes segun su cantidad
let excluyentesDiv = document.getElementById("textbox_excluyentes");
let textExcluyentes = document.getElementById("excluyentes");
textExcluyentes.addEventListener('input', function createExcluyentesText() {
    cleanChild(excluyentesDiv);
    let excluyentesNum = textExcluyentes.value;
    if (!excluyentesNum) {
        cleanChild(excluyentesDiv);
        cleanChild(tablaCump);
    }
    else {
        let excluyentesNum = Number(textExcluyentes.value);
        if (excluyentesNum === 0) {
            cleanChild(excluyentesDiv);
            cleanChild(tablaCump);
        }
        else {
            if (excluyentesNum > 10) {
                excluyentesNum = 10;
            }
            for (let i = 1; i <= excluyentesNum ; i++) {
                let divExclu = document.createElement('div');
                divExclu.id = 'divExclu';

                let textEx = document.createElement('h4');
                textEx.innerHTML = 'ETEx' + i.toString() + ': ';
                textEx.id = 'textEx';
                divExclu.appendChild(textEx);

                let textBox = document.createElement('input');
                divExclu.appendChild(textBox);

                excluyentesDiv.appendChild(divExclu);
            }
        }
    }
});

// Funcion para el boton de tabla de cumplimiento
let botonTablaCump = document.getElementById('btnCump');
botonTablaCump.addEventListener('click', tablaCumpGen);
function tablaCumpGen() {
    cleanChild(tablaCump);

    // Obtener los valores de cantidad de ofertas y de requisitos excluyentes
    let excluyentesNum = textExcluyentes.value;
    let ofertasNum = textOfertas.value;

    if (!excluyentesNum || !ofertasNum) {
        alert('Asegurese de llenar los campos de proveedores y de especificaciones tecnicas excluyentes');
    } else {
        // Crear arrays con los proveedores para generar la tabla
        let arrayProv = new Array();
        let provList = ofertasDiv.children;
        for (let i = 0; i < provList.length; i++) {
            arrayProv.push(provList[i].value);
        }

        // Crear tabla

        // Crear primer row, con los requisitos excluyentes
        let table = document.createElement("TABLE");
        let row = table.insertRow(-1);
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = '';
        row.appendChild(headerCell);
        for (let i = 1; i <= excluyentesNum; i++) {
            let headerCell = document.createElement("TH");
            headerCell.innerHTML = 'ETEx' + i.toString();
            row.appendChild(headerCell);
        }

        // Crear siguientes rows
        for (let i = 0; i < arrayProv.length; i++) {
            row = table.insertRow(-1);
            let cell = row.insertCell(-1);
            cell.innerHTML = arrayProv[i];
            cell.className = 'empName';
            for (let j = 0; j < excluyentesNum; j++) {
                let cell = row.insertCell(-1);
                let checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                cell.appendChild(checkbox);
            }
        }
        tablaCump.appendChild(table);
    }
}


// Crear textboxes para requisitos puntuables
let puntuablesDiv = document.getElementById("textbox_puntuables");
let textPuntuables = document.getElementById("puntuables");
textPuntuables.addEventListener('input', function createPuntuablesText() {
    cleanChild(puntuablesDiv);
    let puntuablesNum = textPuntuables.value;
    if (!puntuablesNum) {
        cleanChild(puntuablesDiv);
        cleanChild(tablaPunt);
    }
    else {
        let puntuablesNum = Number(textPuntuables.value);
        if (puntuablesNum === 0) {
            cleanChild(puntuablesDiv);
            cleanChild(tablaCump);
        }
        else {
            if (puntuablesNum > 15) {
                puntuablesNum = 15;
            }
            for (let i = 1; i <= puntuablesNum ; i++) {
                let divEspe = document.createElement('div');
                divEspe.id = 'divEspe';

                let textEsp = document.createElement('h4');
                textEsp.innerHTML = 'ET' + i.toString() + ': ';
                textEsp.id = 'textEsp';
                divEspe.appendChild(textEsp);

                let textBox = document.createElement('input');
                divEspe.appendChild(textBox);

                puntuablesDiv.appendChild(divEspe);
            }
        }
    }
});

// Funcion para el boton de tabla de puntuacion
let botonTablaPunt = document.getElementById('btnPunt');
botonTablaPunt.addEventListener('click', tablaPuntGen);
function tablaPuntGen() {
    cleanChild(tablaPunt);

    // Obtener los valores de cantidad de requisitos puntuables
    let puntuablesNum = textPuntuables.value;

    if (!puntuablesNum) {
        alert('Asegurese de llenar los campos de requisitos puntuables');
    } else {
        // Crear arrays con los proveedores para generar la tabla
        let arrayProv = new Array();
        let provList = ofertasDiv.children;
        for (let i = 0; i < provList.length; i++) {
            arrayProv.push(provList[i].value);
        }

        // Crear tabla

        // Crear primer row, con los requisitos puntuables
        let table = document.createElement("TABLE");
        table.id = 'tablaPuntaje';
        let row = table.insertRow(-1);
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = '';
        row.appendChild(headerCell);
        for (let i = 1; i <= puntuablesNum; i++) {
            let headerCell = document.createElement("TH");
            headerCell.innerHTML = 'ET' + i.toString();
            row.appendChild(headerCell);
        }
        let finalCell = document.createElement("TH");
        finalCell.innerHTML = 'Puntaje Técnico';        
        row.appendChild(finalCell);

        // Crear siguientes rows
        for (let i = 0; i < arrayProv.length; i++) {
            row = table.insertRow(-1);
            let cell = row.insertCell(-1);
            cell.innerHTML = arrayProv[i];
            cell.className = 'cellEmp';
            for (let j = 0; j <= puntuablesNum; j++) {
                let cell = row.insertCell(-1);
                let textbox = document.createElement('input');
                textbox.setAttribute('type', 'text');
                textbox.style.width = '25px'
                cell.appendChild(textbox);
            }
        }
        tablaPunt.appendChild(table);
    }
}

// Esta funcion hace la suma de puntajes de cada row y lo pone en la ultima celda
let btnSuma = document.getElementById('btnSuma');
btnSuma.addEventListener('click', function doSuma () {
    // Obtener el elemento de tabla y asi sus rows.
    // Cada row son los tr, y debemos arrancar desde el index 1
    let rows = document.getElementById('tablaPuntaje').rows;
    // Primero recorrer los rows y limpiar el ultimo cell
    for (let i = 1; i < rows.length; i++) {
        let j = document.getElementById('tablaPuntaje').rows[i].cells.length;
        lastCell = document.getElementById('tablaPuntaje').rows[i].cells[j-1].lastChild;
        lastCell.value = '';
    }
    // Ahora recorro para hacer la suma
    for (let i = 1; i < rows.length; i++) {
        let suma = 0;
        for (var j = 1; j < rows[i].cells.length; j++) {
            suma += Number(rows[i].cells[j].lastChild.value);
        }
        let valueCell = document.getElementById('tablaPuntaje').rows[i].cells[j-1].lastChild
        valueCell.value = suma.toString();
    }
});


// Funcion para el boton de tabla de evaluacion
let botonTablaEval = document.getElementById('btnEval');
botonTablaEval.addEventListener('click', function tablaEvalGen(){;
    cleanChild(tablaEval);

    // Crear arrays con los proveedores para generar la tabla
    let arrayProv = new Array();
    let provList = ofertasDiv.children;
    for (let i = 0; i < provList.length; i++) {
        arrayProv.push(provList[i].value);
    }

    // Crear tabla
    // Crear primer row, con los titulos de columnas
    let table = document.createElement("TABLE");
    let row = table.insertRow(-1);
    // Poner un cell vacio y otro para los dropdown de monedas
    let headerCell = document.createElement("TH");
    headerCell.innerHTML = '';
    row.appendChild(headerCell);
    // let monedaCell = document.createElement('TH');
    // monedaCell.innerHTML = '';
    // row.appendChild(monedaCell);

    // Crear headers con texto
    let listaHeaders = ['Oferta Económica', 'Puntuación Económica', 'Puntuación Final'];
    for (let i = 0; i < listaHeaders.length; i++) {
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = listaHeaders[i];
        row.appendChild(headerCell);
    }

    // Crear siguientes rows
    for (let i = 0; i < arrayProv.length; i++) {
        // Primero insertar el nombre de empresa
        row = table.insertRow(-1);
        let cell = row.insertCell(-1);
        cell.className = 'cellEmp';
        cell.innerHTML = arrayProv[i];
        // Crear siguientes celdas
        // Poner solo el drop down en la primer columna (oferta economica)
        for (let j = 0; j < 2; j++) {
            if (flagMoneda == 0) {
                let cell = row.insertCell(-1);
                let monedaDrop = document.createElement('select');
                monedaDrop.id = 'monedadrop';
                let monedasList = ['USD', '$', 'EUR'];
                for (let i = 0; i < monedasList.length; i++) {
                    let optionElement = document.createElement('option');
                    optionElement.innerHTML = monedasList[i];
                    monedaDrop.appendChild(optionElement);
                }
                cell.appendChild(monedaDrop);
                let textbox = document.createElement('input');
                textbox.setAttribute('type', 'text');
                textbox.style.width = '110px';
                cell.appendChild(textbox);    
                flagMoneda = 1;
            }
            let cell = row.insertCell(-1);
            let textbox = document.createElement('input');
            textbox.setAttribute('type', 'text');
            textbox.style.width = '110px';
            cell.appendChild(textbox);
        }
        flagMoneda = 0;
    }
    tablaEval.appendChild(table);
});


// Cambia el flag para que no se borre el contenido de divs de texto una vez editados
let comments = document.getElementById('comments');
comments.addEventListener('focus', function () {
    if (flagComments === 0) {
        this.innerHTML = '';
        flagComments = 1;
    }
});
let observaciones1 = document.getElementById('observaciones1');
observaciones1.addEventListener('focus', function () {
    if (flagObservaciones1 === 0) {
        this.innerHTML = '';
        flagObservaciones1 = 1;
    }
});
let observaciones2 = document.getElementById('observaciones2');
observaciones2.addEventListener('focus', function () {
    if (flagObservaciones2 === 0) {
        this.innerHTML = '';
        flagObservaciones2 = 1;
    }
});
let conclusiones = document.getElementById('conclusiones');
conclusiones.addEventListener('focus', function () {
    if (flagConclusiones === 0) {
        this.innerHTML = '';
        flagConclusiones = 1;
    }
});


// Funcion para el boton de generar PDF
document.getElementById('pdfGen').onclick = function () {
    fecha_text = document.getElementById('fecha_text');
    fecha_text.className = 'postPDF';

    nro = document.getElementById('nro');
    nro.className = 'postPDF';

    comments = document.getElementById('comments');
    comments.className = 'postPDF';

    observaciones1 = document.getElementById('observaciones1');
    observaciones1.className = 'postPDF';

    observaciones2 = document.getElementById('observaciones2');
    observaciones2.className = 'postPDF';

    conclusiones = document.getElementById('conclusiones');
    conclusiones.className = 'postPDF';

    ref_list = document.getElementById('ref_list');
    if (flagRefList === 0) {
        ref_list.className = 'botPDF';
        ref_list_value = ref_list.options[ref_list.selectedIndex].text;
        let textref = document.createElement('div');
        textref.id = 'textref';
        textref.innerHTML = ref_list_value;
        ref_div.appendChild(textref);
        flagRefList = 1;
    } else {
        textref = document.getElementById('textref');
        textref.parentNode.removeChild('textref');
        ref_list.className = '';
    }

    ofertas = document.getElementById('ofertas');
    ofertas.className = 'postPdfOther';

    allTextBoxes = document.getElementsByTagName('input');
    for (let i = 0; i < allTextBoxes.length; i++) {
        allTextBoxes[i].className = 'postPdfOther';
    }

    monedaSelect = document.querySelectorAll('#monedadrop');
    for (let i = 0; i < monedaSelect.length; i++) {
        monedaSelect[i].className = 'selectPDF';
    }

    btnCump = document.getElementById('btnCump');
    btnCump.className = 'botPDF';

    btnPunt = document.getElementById('btnPunt');
    btnPunt.className = 'botPDF';

    btnSuma = document.getElementById('btnSuma');
    btnSuma.className = 'botPDF';

    btnEval = document.getElementById('btnEval');
    btnEval.className = 'botPDF';

    pdfGen = document.getElementById('pdfGen');
    pdfGen.className = 'botPDF';

    etex = document.getElementById('ETEX');
    etex.innerHTML = 'Especificaciones Técnicas Excluyentes (ETEx)';

    et = document.getElementById('ET');
    et.innerHTML = 'Especificaciones Técnicas Puntuables (ET)';

    textExcluyentes.className = 'botPDF';
    textPuntuables.className = 'botPDF';

    divExcluyentes = document.getElementById('divExcluyentes');
    let excluyentesNum = textExcluyentes.value;
    if (!excluyentesNum) {
        divExcluyentes.className = 'botPDF';
        flagDivExcluyentes = 1;
    } else {
        let excluyentesNum = Number(textExcluyentes.value);
        if (excluyentesNum === 0) {
           divExcluyentes.className = 'botPDF';
           flagDivExcluyentes = 1;
        }
    }

    divPuntuables = document.getElementById('divPuntuables');
    let puntuablesNum = textPuntuables.value;
    if (!puntuablesNum) {
        divPuntuables.className = 'botPDF';
        flagDivEPuntuables = 1;
    } else {
        let puntuablesNum = Number(textPuntuables.value);
        if (puntuablesNum === 0) {
           divEPuntuables.className = 'botPDF';
           flagDivPuntuables = 1;
        }
    }


    window.print();

    // Volver los estilos para atras
    if (flagRefList === 0) {
        ref_list.className = 'botPDF';
        ref_list_value = ref_list.options[ref_list.selectedIndex].text;
        let textref = document.createElement('div');
        textref.id = 'textref';
        textref.innerHTML = ref_list_value;
        ref_div.appendChild(textref);    
    } else {
        textref = document.getElementById('textref');
        textref.parentNode.removeChild(textref);
        ref_list.className = '';
        flagRefList = 0;
    }

    pdfGen.className = '';
    btnCump.className = '';
    btnPunt.className = '';
    btnSuma.className = '';
    btnEval.className = '';
    monedaSelect.className = '';
    textbox_excluyentes.className = '';
    excluyentes_data.className = '';
    textExcluyentes.className = '';
    textPuntuables.className = '';
    etex.innerHTML = 'Especificaciones Técnicas Excluyentes (ETEx):';
    et.innerHTML = 'Especificaciones Técnicas Puntuables (ET):';
    if (flagDivExcluyentes === 1) {
        divExcluyentes.className = '';
        flagDivExcluyentes = 0;
    }
    if (flagDivPuntuables === 1) {
        divPuntuables.className = '';
        flagDivPuntuables = 0;
    }
}
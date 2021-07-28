let flagComments = 0;
let flagObservaciones1 = 0;
let flagObservaciones2 = 0;
let flagConclusiones = 0;
let flagRefList = 0;

let tablaCump = document.getElementById("tablaCump");

function cleanChild(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.lastChild);
    }
};

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


let botonTablaCump = document.getElementById('btnCump');
botonTablaCump.addEventListener('click', tablaCumpGen);
function tablaCumpGen() {
    cleanChild(tablaCump);

    let requisitosNum = textRequisitos.value;
    let ofertasNum = textOfertas.value;

    if (!requisitosNum || !ofertasNum) {
        alert('Asegurese de llenar los campos de cantidad de proveedores y de requisitos');
    } else {
        let arrayReq = new Array();
        let requisitosList = requisitosDiv.children;
        for (let i = 0; i < requisitosList.length; i++) {
            arrayReq.push(requisitosList[i].value);
        }

        let arrayProv = new Array();
        let provList = ofertasDiv.children;
        for (let i = 0; i < provList.length; i++) {
            arrayProv.push(provList[i].value);
        }

        let table = document.createElement("TABLE");

        let row = table.insertRow(-1);
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = '';
        row.appendChild(headerCell);
        for (let i = 0; i < arrayReq.length; i++) {
            let headerCell = document.createElement("TH");
            headerCell.innerHTML = arrayReq[i];
            row.appendChild(headerCell);
        }

        for (let i = 0; i < arrayProv.length; i++) {
            row = table.insertRow(-1);
            let cell = row.insertCell(-1);
            cell.innerHTML = arrayProv[i];
            for (let j = 0; j < arrayReq.length; j++) {
                let cell = row.insertCell(-1);
                let checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                cell.appendChild(checkbox);
            }
        }
        tablaDiv.appendChild(table);
    }
}

let especificacionesDiv = document.getElementById("textbox_especificaciones");
let textEspecificaciones = document.getElementById("especificaciones");
textEspecificaciones.addEventListener('input', function createEspecificacionesText() {
    cleanChild(especificacionesDiv);
    let especificacionesNum = textEspecificaciones.value;
    if (!especificacionesNum) {
        cleanChild(especificacionesDiv);
        cleanChild(tablaCump);
    }
    else {
        let especificacionesNum = Number(textEspecificaciones.value);
        if (especificacionesNum === 0) {
            cleanChild(especificacionesDiv);
            cleanChild(tablaCump);
        }
        else {
            if (especificacionesNum > 10) {
                especificacionesNum = 10;
            }
            for (let i = 1; i <= especificacionesNum ; i++) {
                let divEspe = document.createElement('div');
                divEspe.id = 'divEspe';

                let textEsp = document.createElement('h4');
                textEsp.innerHTML = 'ET' + i.toString() + ': ';
                textEsp.id = 'textEsp';
                divEspe.appendChild(textEsp);

                let textBox = document.createElement('input');
                divEspe.appendChild(textBox);

                especificacionesDiv.appendChild(divEspe);
            }
        }
    }
});

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

// document.getElementById('pdfGen').onclick = function () {
//     fecha_text = document.getElementById('fecha_text');
//     fecha_text.className = 'postPDF';

//     nro = document.getElementById('nro');
//     nro.className = 'postPDF';

//     comments = document.getElementById('comments');
//     comments.className = 'postPDF';

//     observaciones = document.getElementById('observaciones');
//     observaciones.className = 'postPDF';

//     conclusiones = document.getElementById('conclusiones');
//     conclusiones.className = 'postPDF';

//     ref_list = document.getElementById('ref_list');
//     if (flagRefList === 0) {
//         ref_list.className = 'botPDF';
//         ref_list_value = ref_list.options[ref_list.selectedIndex].text;
//         let textref = document.createElement('div');
//         textref.id = 'textref';
//         textref.innerHTML = ref_list_value;
//         ref_div.appendChild(textref);
//         flagRefList = 1;
//     } else {
//         textref = document.getElementById('textref');
//         textref.parentNode.removeChild('textref');
//         ref_list.className = '';
//     }

//     ofertas = document.getElementById('ofertas');
//     ofertas.className = 'postPdfOther';

//     textbox_proveedores = document.getElementById('textbox_proveedores');
//     textbox_proveedores_elements = textbox_proveedores.children;
//     for (let i = 0; i < textbox_proveedores_elements.length; i++) {
//         textbox_proveedores_elements[i].className = 'postPdfOther';
//     }

//     requisitos_data = document.getElementById('requisitos_data');
//     requisitos_data.className = 'botPDF';

//     textbox_requisitos = document.getElementById('textbox_requisitos');
//     textbox_requisitos.className = 'botPDF';

//     btnGen = document.getElementById('btnGen');
//     btnGen.className = 'botPDF';

//     pdfGen = document.getElementById('pdfGen');
//     pdfGen.className = 'botPDF';

//     window.print();

//     // Volver los estilos para atras

//     if (flagRefList === 0) {
//         ref_list.className = 'botPDF';
//         ref_list_value = ref_list.options[ref_list.selectedIndex].text;
//         let textref = document.createElement('div');
//         textref.id = 'textref';
//         textref.innerHTML = ref_list_value;
//         ref_div.appendChild(textref);    
//     } else {
//         textref = document.getElementById('textref');
//         textref.parentNode.removeChild(textref);
//         ref_list.className = '';
//         flagRefList = 0;
//     }

//     pdfGen.className = '';
//     btnGen.className = '';
//     textbox_requisitos.className = '';
//     requisitos_data.className = '';
// }
let textOfertas = document.getElementById("ofertas");
let textRequisitos = document.getElementById("requisitos");

let ofertasDiv = document.getElementById("textbox_proveedores");
let requisitosDiv = document.getElementById("textbox_requisitos");

let tablaDiv = document.getElementById("tabla");

textOfertas.addEventListener('input', function createOfertasText() {
    cleanChild(ofertasDiv);
    let ofertasNum = textOfertas.value;
    if (!ofertasNum) {
        // textOfertas.innerHTML = 'x';
        cleanChild(ofertasDiv);
        cleanChild(tablaDiv);
    }
    else {
        let ofertasNum = Number(textOfertas.value);
        if (ofertasNum === 0) {
            // textOfertas.innerHTML = 'x';
            cleanChild(ofertasDiv);
            cleanChild(tablaDiv);
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

textRequisitos.addEventListener('input', function createRequisitosText() {
    cleanChild(requisitosDiv);
    let requisitosNum = textRequisitos.value;
    if (!requisitosNum) {
        // textRequisitos.innerHTML = 'x';
        cleanChild(requisitosDiv);
        cleanChild(tablaDiv);
    }
    else {
        let requisitosNum = Number(textRequisitos.value);
        if (requisitosNum === 0) {
            // textRequisitos.innerHTML = 'x';
            cleanChild(requisitosDiv);
            cleanChild(tablaDiv);
        }
        else {
            if (requisitosNum > 15) {
                requisitosNum = 15;
            }
            for (let i = 0; i < requisitosNum ; i++) {
                let textBox = document.createElement('input');
                requisitosDiv.appendChild(textBox);
            }
        }
    }
});

function cleanChild(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.lastChild);
    }
};

let botonTabla = document.getElementById('btnGen');
botonTabla.addEventListener('click', tableGen);

function tableGen() {
    cleanChild(tablaDiv);

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

let botonPDF = document.getElementById('pdfGen');

botonPDF.addEventListener('click', getPDF);

function getPDF() {
    // Modificar elementos para que no aparezcan
    window.print();
}

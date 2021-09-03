function cargarDatos() {
    //capturamos el elemento html
    let tabla = document.getElementById("tablaDatos").getElementsByTagName("tbody")[0];

    //parsear el json a object
    let dataObj = JSON.parse(data);

    //recorrer el Json
    for (var i = 0; i < dataObj.length; i++) {
        //modificando el html de la tabla
        var row = tabla.insertRow(i);
        var cell = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        cell.innerHTML = dataObj[i].name;
        cell1.innerHTML = dataObj[i].age;
        cell2.innerHTML = dataObj[i].parientes;
        cell3.innerHTML = dataObj[i].cabello;
    }
}


function buscarNombre() {
    //parsear el json a object
    let dataObj = JSON.parse(data);
    let nombreInput = document.getElementById('nombre').value;
    nombreInput = nombreInput.charAt(0).toUpperCase() + nombreInput.slice(1);
    for (var i = 0; i < dataObj.length; i++) {
        if (dataObj[i].name.search(nombreInput) > -1) {
            window.alert("Nombre: "+dataObj[i].name+" Años: "+ dataObj[i].age+" Color de cabello: "+dataObj[i].cabello);

        }
    }
}

function buscarParientes() {
    //parsear el json a object
    let dataObj = JSON.parse(data);
    let nombreInput = document.getElementById('nombre').value;
    nombreInput = nombreInput.charAt(0).toUpperCase() + nombreInput.slice(1);
    for (var i = 0; i < dataObj.length; i++) {
        if (dataObj[i].name.search(nombreInput) > -1) {
            window.alert("Nombre: "+dataObj[i].name+" Tiene: "+ dataObj[i].parientes + " parientes, y su cabello es de color: " + dataObj[i].cabello)

        }
    }
}
function buscarColorCabello() {
    //parsear el json a object
    let dataObj = JSON.parse(data);
    let colorInput = document.getElementById('color').value;
    colorInput = colorInput.charAt(0).toUpperCase() + colorInput.slice(1);
    for (var i = 1; i < dataObj.length; i++) {
        if (dataObj[i].cabello.search(colorInput) > -1) {
            window.alert('El Color de cabello ' + dataObj[i].cabello + " lo tiene: " + dataObj[i].name)
        }
    }
}
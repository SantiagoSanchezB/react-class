let data = '[{ "name":"Lisa", "age":10, "parientes": 2, "cabello":"Amarillo"}, { "name":"Bart", "age":9, "parientes":2, "cabello":"Amarillo"}, { "name":"Homero", "age":42, "parientes":2, "cabello":"Cafe"}, { "name":"Marge", "age":35, "parientes":1, "cabello":"Azul"}]';

let dataObj = JSON.parse(data);

let claves = Object.keys(dataObj);

for (var i = 0; i < claves.length; i++) {
    let clave = claves[i];
    console.log(dataObj[clave]);
}
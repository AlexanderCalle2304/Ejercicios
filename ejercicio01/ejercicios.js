`use strict`

const edad = parseInt(prompt("Ingresa tu edad"));
let licencia = confirm("¿Tiene licencia profesional?");


if (edad >= 25 && licencia === true) {
    alert("Es apto");
} else {
    alert("No es apto");
}

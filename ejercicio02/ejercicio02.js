`use strict`

const promedio = parseFloat(prompt("¿Cual es su promedio?"));
const ingresos = parseInt(prompt("¿Cuales son sus ingresos familiares?"));

if (promedio >= 8.5 && ingresos <= 600) {
    alert("Aprobado");
} else {
    alert("Desaprobado");
}
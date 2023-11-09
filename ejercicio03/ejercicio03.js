`use strict`

let apodo = prompt("Ingresa tu apodo");

if (apodo === null) {
    apodo = "annymus"
    alert(`Tu apodo es ${apodo}`);
} else {
    alert(`Tu apodo es: ${apodo}`);
}

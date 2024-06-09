import sum from "./funciones.js";

function sumar() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = sum(num1, num2);
    document.getElementById('resultado').innerText = result;
}

window.sumar = sumar;
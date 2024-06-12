/* global sum */

function sumar() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let result = sum(num1, num2);
  document.getElementById('resultado').innerText = result;
}

window.sumar = sumar 
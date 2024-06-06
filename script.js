function sumar() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = 'Por favor, ingrese dos números válidos.';
    } else {
        var suma = num1 + num2;
        document.getElementById('resultado').innerText = 'La suma es: ' + suma;
    }
}
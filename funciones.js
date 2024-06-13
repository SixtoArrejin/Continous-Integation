function mul(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (isNaN(num1) || isNaN(num2)) {
    return 'Por favor, ingrese dos números válidos.';
  } else {
    let suma = num1 * num2;
      return 'La multiplicación es: ' + suma;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = mul;
}

if (typeof window !== 'undefined') {
  window.mul = mul;
}
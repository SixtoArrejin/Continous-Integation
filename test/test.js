const assert = require('assert');
const strictEqual = assert.strictEqual
const mul = require('../funciones.js');

describe('Función sumar()', () => {
  it('debería devolver la multiplicación de dos números', () => {
    strictEqual(mul(2, 3), 'La multiplicación es: 6');
    strictEqual(mul(0, 0), 'La multiplicación es: 0');
    strictEqual(mul(-1, 1), 'La multiplicación es: -1');
  });

  it('debería devolver NaN si se le pasa un valor no numérico', () => {
    strictEqual(mul('a', 5), 'Por favor, ingrese dos números válidos.');
    strictEqual(mul(2, 'b'), 'Por favor, ingrese dos números válidos.');
    strictEqual(mul('foo', 'bar'), 'Por favor, ingrese dos números válidos.');
  });
});
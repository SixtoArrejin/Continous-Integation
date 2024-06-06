import { expect } from 'chai';

describe('Suma de Números', () => {
  it('debería sumar correctamente dos números', () => {
    const num1 = 2;
    const num2 = 3;
    const suma = num1 + num2;
    expect(suma).to.equal(5);
  });

  it('debería retornar NaN si uno de los valores no es un número', () => {
    const num1 = 'abc';
    const num2 = 3;
    const suma = parseFloat(num1) + num2;
    expect(isNaN(suma)).to.be.true;
  });
});

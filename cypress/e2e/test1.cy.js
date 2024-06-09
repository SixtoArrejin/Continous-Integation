describe('Suma de dos números', () => {
  beforeEach(() => {
    // Visitamos la página antes de cada test
    cy.visit('https://continous-integation.onrender.com');
  });

  it('debería sumar dos números correctamente', () => {
    // Seleccionamos los inputs y el botón, luego interactuamos con ellos
    cy.get('#num1').type('5');
    cy.get('#num2').type('3');
    cy.get('button').click();

    // Verificamos el resultado
    cy.get('#resultado').should('have.text', 'La suma es: 8');
  });

  it('debería mostrar un error si no se ingresan números', () => {
    // Dejamos los inputs vacíos y hacemos click en el botón
    cy.get('button').click();

    // Verificamos que el resultado sea un mensaje de error o un valor por defecto
    cy.get('#resultado').should('have.text', 'Por favor, ingrese dos números válidos.');
  });
});

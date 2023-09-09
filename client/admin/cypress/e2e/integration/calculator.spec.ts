// cypress/integration/calculator.spec.js
describe('Calculadora de Suma', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Asegúrate de que la URL sea la correcta para tu aplicación
    });
  
    it('Realizar suma exitosa', () => {
      cy.get('input[placeholder="Número 1"]').type('5');
      cy.get('input[placeholder="Número 2"]').type('3');
      cy.contains('Sumar').click();
      cy.get('div').contains('Resultado: 8').should('be.visible');
    });
  
    it('Gestionar entradas no válidas', () => {
      cy.get('input[placeholder="Número 1"]').type('abc');
      cy.get('input[placeholder="Número 2"]').type('3');
      cy.contains('Sumar').click();
      cy.get('div').contains('Resultado: Entradas no válidas').should('be.visible');
    });
  });
describe('Calculadora', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/'); // Asegúrate de ajustar la URL según tu configuración
    });
  
    it('Realizar una suma simple', () => {
      cy.get('button').contains('1').click();
      cy.get('button').contains('+').click();
      cy.get('button').contains('2').click();
      cy.get('button').contains('=').click();
      cy.get('.display').should('have.text', '3');
    });
  
    it('Realizar una resta simple', () => {
      cy.get('button').contains('7').click();
      cy.get('button').contains('-').click();
      cy.get('button').contains('4').click();
      cy.get('button').contains('=').click();
      cy.get('.display').should('have.text', '3');
    });
  
    // Agrega más pruebas para otros cálculos y escenarios aquí
  });
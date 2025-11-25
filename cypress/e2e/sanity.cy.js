/// <reference types="cypress" />


describe('Teste de Sanidade', () => {
    it('Deve visitar a página principal com sucesso', () => {
        cy.visit('/'); 
        cy.url().should('include', 'herokuapp.com');
    });
});
/// <reference types="cypress" />

describe('Testes em elementos dinamicos', () =>{
    it('CT-006: Deve aguardar e validar o texto carregado dinamicamente', () =>{
        cy.visit('./dynamic_loading/2');
        //clica no botão
        cy.get('#start > button').click();
        cy.get('#finish',{timeout: 10000}).should('be.visible').and('contain','Hello World!');
        //cypress espera até 10 segundos para que o elemento esteja visivel

    });
});
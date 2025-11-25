/// <reference types="cypress" />

describe('Interações com elementos UI',() =>{

    it('CT-004: Marcar e demarcar checkboxes corretamente', () =>{

        cy.visit('./checkboxes');
        //marcar o checkbox 1
        cy.get('#checkboxes > input:nth-child(1)').check();
        //desmarcar o checkbox 2 (ja vem marcado)
        cy.get('#checkboxes > input:nth-child(3)').uncheck();
        //validação 
        cy.get('#checkboxes > input:nth-child(1)').should('be.checked');
        cy.get('#checkboxes > input:nth-child(3)').should('not.be.checked');
    });

    it('CT-005: Abrir o dropdown e selecionar a Opção 2.', () =>{
        cy.visit('/dropdown');
        //obtenção por texto
        cy.get('#dropdown').select('Option 2');
        //obtenção por valor
        //cy.get('#dropdown').select('2');
        //obtenção por indice
        //cy.get('#dropdown').select(2); 
        cy.get('#dropdown').should('have.value', '2'); // valida pelo atributo 'value'
        cy.get('#dropdown').contains('Option 2').should('be.selected'); // valida pelo texto visível
    });

});
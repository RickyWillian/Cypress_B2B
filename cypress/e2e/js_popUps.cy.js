/// <reference types="cypress" />

describe('Testes em alertas e prompts JS', () => {


    
    it('CT-007: Aceitar o alerta JS',() =>{
        cy.visit('/javascript_alerts');
        cy.contains('Click for JS Alert').click();
        //validação. (cypress aceita automaticamente os alertas)
        cy.get('#result').should('be.visible').and('contain','You successfully clicked an alert');
    })

    it('CT-008: Deve digitar texto no JS Prompt e validar a entrada', () =>{
        const textoDeTeste = 'Automacao com Cypress';

        //função para interceptar a chamada JS e inserir o texto no prompt antes de aparecer ao usuario

        /*
        solução 2
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(textoDeTeste);
        });
        *******************
        solução 1
        cy.on('window:prompt', (promptText, defaultText) => {
            expect(promptText).to.equal('I am a JS prompt');
            return textoDeTeste;
        });
        */
       //solução definitiva
        cy.visit('/javascript_alerts', {
            onBeforeLoad(win){
                cy.stub(win, 'prompt').returns(textoDeTeste);
            }
        });


        cy.contains('Click for JS Prompt').click();

        cy.get('#result').should('be.visible').and('contain', `You entered: ${textoDeTeste}`);

    });
});
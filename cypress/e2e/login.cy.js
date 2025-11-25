/// <reference types="cypress" />

describe('Autenticação de Usuário', () => {
    
    
    const URL_LOGIN = 'https://the-internet.herokuapp.com/login';
    
    it('CT-001: Deve realizar login com sucesso usando credenciais válidas', () => {
        cy.fixture('validUser').then((user) => {
            //Acessar a página de Login
            cy.login(user.username, user.password, {log: false});

            // O login bem-sucedido redireciona para a área segura (Secure Area)
            cy.url().should('include', '/secure');
            
            // VALIDAÇÃO: Verificar a mensagem de sucesso (elemento com classe 'flash' e texto 'You logged into a secure area!')
            cy.get('#flash')
            .should('be.visible')
            .and('contain', 'You logged into a secure area!');
        
        })
    });

    it('CT-002: Realizar login sem sucesso usando credenciais invalidas', () => {
        cy.fixture('invalidUser').then((user)=> {
            cy.login(user.username, user.password, {log:false});
            cy.get('#flash')
            .should('be.visible')
            .and('contain','Your username is invalid!');
        })

    });

    it('CT-003: Login com campo de senha vazio', () => {
        cy.fixture("emptyPassword").then((user) => {
            cy.login(user.username, user.password, {log: false});
            cy.get('#flash')
            .should('be.visible')
            .and('contain', 'Your password is invalid!');
        });
    });
});
import './commands' // Importa seus comandos customizados, como cy.login()

// Solução para ignorar o ReferenceError: process is not defined
Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para evitar que o Cypress falhe o teste.
    return false;
});

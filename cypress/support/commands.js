
Cypress.Commands.add('login', (username, password) => {
    
    // Acessa a página de login
    cy.visit('/login'); 
    
    // Digita o nome de usuário (o log da digitação do username não é ocultado aqui, 
    // mas o comando inteiro cy.login() será ocultado no log final, veja o passo B)
    cy.get('#username').type(username);
    
    // Digita a senha, OCULTANDO o valor no log do Cypress
    if(password != '')
        cy.get('#password').type(password, { log: false });
    
    // Clica no botão de Login
    cy.contains('button', 'Login').click();
});
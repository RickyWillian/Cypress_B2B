const { defineConfig } = require('cypress');
// A linha 'const preprocessor = require(...)' foi removida

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com', 
    
    // A função setupNodeEvents foi limpa para a configuração padrão
    setupNodeEvents(on, config) {
      // Deixe este bloco vazio ou remova-o se não for usado.
    },
  },
});
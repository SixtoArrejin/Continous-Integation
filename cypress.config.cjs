// cypress.config.js

module.exports = {
  e2e: {
    baseUrl: 'https://continous-integation.onrender.com',
    setupNodeEvents(on, config) {
      // implementa aquí los listeners de eventos de Node
    },
    supportFile: false
  }
};

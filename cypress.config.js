const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',
    defaultCommandTimeout: 8000,  // час в мілісекундах
pageLoadTimeout: 60000,
video: true,
screenshotOnRunFailure: true,
  },
});



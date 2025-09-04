const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space",
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space", // дефолтный
    env: {
      sites: {
        qauto1: {
          url: "https://guest:welcome2qauto@qauto.forstudy.space",
          email: "naste38+1@gmail.com",
          password: "Pass112233",
        },
        qauto2: {
          url: "https://guest:welcome2qauto@qauto2.forstudy.space",
          email: "naste38+2@gmail.com",
          password: "Pass112233",
        },
      },
    },
  },
});

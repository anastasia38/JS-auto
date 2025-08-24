const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   reporter: "cypress-mochawesome-reporter",
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space",
     setupNodeEvents(on, config) {
       require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
    },
  },
});

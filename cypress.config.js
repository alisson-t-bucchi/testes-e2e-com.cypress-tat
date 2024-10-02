const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})

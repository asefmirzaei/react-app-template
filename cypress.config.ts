import { defineConfig } from "cypress";

export default defineConfig({
  video: false,

  e2e: {
    // baseUrl: 'http://localhost:1234',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

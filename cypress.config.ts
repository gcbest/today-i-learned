import { defineConfig } from 'cypress';

const db = require('./src/server/db/utils');

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      on('task', {
        'resetTest:db': () => db.seed('defaults'),
      });
    },
  },
});

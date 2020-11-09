const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/e2e/*.test.js',
  output: './tests/e2e/output',
  helpers: {
    TestCafe: {
      url: 'http://localhost',
      browser: 'chrome',
      show: true
    },
    CustomHelper: {
      require: './tests/e2e/helpers/custom.helper.js'
    },
  },
  multiple: {
    basic: {
      browsers: [
        'chrome',
        'firefox',
        'ie'
      ]
    }
  },
  include: {
    TodosPage: './tests/e2e/pages/todos.page.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'todo-e2e',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      outputDir: 'report',
      enabled: true
    }
  }
};
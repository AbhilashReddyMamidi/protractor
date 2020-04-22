exports.config = {

  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine2',

  //seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./functional/CalcAppTest.js'],

  suites: {
    functional: ['./functional/*.js'],
    smoke: ['./smoke/*.js'],
    regression: ['./regression/*.js'],
    all: ['./*/*.js'],
    selected: ['./functional/BankingAppTest.js', './smoke/firstTest.js', './regression/secondTest.js']
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
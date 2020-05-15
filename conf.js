exports.config = {

  directConnect: true,

  capabilities: {
    browserName: 'chrome'
  },

  framework: 'jasmine2',

  //seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./testSpecs/CustomerLogin.js', './testSpecs/BankManagerLogin.js'],

  suites: {
    functional: ['./functional/*.js'],
    smoke: ['./smoke/*.js'],
    regression: ['./regression/*.js'],
    all: ['./*/*.js'],
    selected: ['./functional/BankingAppTest.js', './regression/ValidateTitlesTest.js', './smoke/secondTest.js']
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function() {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      allureReport: {
        resultsDir: 'allure-results'
      }
    }));
      jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
          }, 'image/png')();
          done();
        })
      });
    },

    onComplete:function () {
      console.log("Sending Mails with reports for the Test Execution");
      var sys= require('util');
      var exec= require('child_process').exec;
      function puts(error, stdout,stderr) { sys.puts(stdout)      }
      exec("node ./functional/Mail.js", puts);
    }
};
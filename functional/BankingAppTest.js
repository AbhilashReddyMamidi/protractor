const logger = require('../utilities/Log')
describe('Automating Banking App as Functional Test', function(){
    var expectedUserName;
    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.manage().window().maximize();
        logger.info("Navigating to the Banking Application");
        element(by.buttonText('Customer Login')).click();
        logger.info("Navigating to the Customer Login Page");
        browser.sleep(3000);
        expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');

        element.all(by.css('#userSelect option')).then(function(users) {
            console.log('The Users count:' + users.length);

            for (var i = 0; i < users.length; i++) {

                users[i].getAttribute('value').then(function (value) {
                    console.log(value);
                });
                users[i].getText().then(function (name) {
                    console.log(name);
                });
            }
        });
    });

    it('Validating logged in Customer2', function(){

            element(by.model('custId')).$("[value='2']").click();
            element(by.buttonText('Login')).click();
            logger.info("Logged In as Customer");
            expectedUserName=element(by.binding('user')).getText();
            expectedUserName.then(function(text){
                expect(text).toBe('Harry Potter');
                logger.info("Validating the Logged In Customer Name");
            });
    });

    it('Validating logged in Customer3', function(){

            element(by.model('custId')).$("[value='3']").click();
            element(by.buttonText('Login')).click();
            expectedUserName=element(by.binding('user')).getText();
            expectedUserName.then(function(text) {
                expect(expectedUserName).not.toBe('Abhi');
                logger.info("Validating the Logged In Customer Name");
            });
    });

    it('Validating logged in Customer5', function(){

            element(by.model('custId')).$("[value='5']").click();
            element(by.buttonText('Login')).click();
            expectedUserName=element(by.binding('user')).getText();
            expectedUserName.then(function(text) {
                expect(expectedUserName).toBe('Neville Longbottom');
                logger.info("Validating the Logged In Customer Name");
            });
    });

    afterEach(function() {
            browser.sleep(3000);
            console.log("After every it block");
            logger.info("Closing the Application");
    });
});
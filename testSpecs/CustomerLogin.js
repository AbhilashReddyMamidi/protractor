var SelectWrapper = require("../utilities/SelectWrapper");
var customerSelect = new SelectWrapper(by.id("userSelect"));

describe("Automating Customer Login functionality", function () {

    it("Login to the Customer Account", function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        browser.manage().window().maximize();
        element(by.buttonText("Customer Login")).click();
        customerSelect.selectByText("Harry Potter");
        element(by.buttonText("Login")).click();
    })

    it('Validate Deposits', function () {

        element(by.buttonText("Deposit")).click();
        element(by.model("amount")).sendKeys("1000");
        element(by.css(".btn.btn-default")).click();
        var depositMessage= element(by.binding("message")).getText();
        depositMessage.then(function (text) {
            console.log(text);
        });
        expect(depositMessage).toEqual("Deposit Successful");
    });

    it('Validate Withdrawl', function () {

        element(by.buttonText("Withdrawl")).click();
        element(by.model("amount")).sendKeys("1000");
        element(by.css(".btn.btn-default")).click();
        var withdrawlMessage= element(by.binding("message")).getText();
        withdrawlMessage.then(function (text) {
            console.log(text);
        });
        expect(withdrawlMessage).toEqual("Transaction successful");
    });
});
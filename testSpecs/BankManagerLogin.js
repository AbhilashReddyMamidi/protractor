var SelectWrapper = require("../utilities/SelectWrapper");
var customerSelect = new SelectWrapper(by.id("userSelect"));
var currencySelect = new SelectWrapper(by.id('currency'));
var customLocator = require("../utilities/CustomLocators");
var alertDialog;

describe("Automating Bank Manager Login functionality", function () {

    it("Login to the Bank Manager Account", function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        browser.manage().window().maximize();
        element(by.ngClick("manager()")).click();
    });

    it('Validate Add Customer', function () {

        element(by.ngClick("addCust()")).click();
        element(by.model("fName")).sendKeys("Abhilash");
        element(by.model("lName")).sendKeys("Reddy");
        element(by.model("postCd")).sendKeys("500048");
        element(by.css(".btn.btn-default")).click();
        alertDialog= browser.switchTo().alert();
        alertDialog.getText().then(function (text) {

            console.log(text);
        });
        alertDialog.accept();
    });

    it('Validate Open Account', function () {

        element(by.ngClick("openAccount()")).click();
        customerSelect.selectByText("Abhilash Reddy");
        currencySelect.selectByText("Rupee");
        element(by.buttonText("Process")).click();
        alertDialog= browser.switchTo().alert();
        alertDialog.getText().then(function (text) {

            console.log(text);
        });
        alertDialog.accept();
    });

    it('Validate Customer', function () {

        element(by.ngClick("showCust()")).click();
        element(by.model("searchCustomer")).sendKeys("Abhilash");
        var firstName= element(by.repeater("cust in Customers").row(0).column("cust.fName"));
        firstName.getText().then(function (text) {

            console.log(text);
        });
        expect(firstName.getText()).toEqual("Abhilash");
    });

});
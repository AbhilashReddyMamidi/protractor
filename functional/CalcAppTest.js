var Objects = require("../testdata/Objects.json")
var DataProvider= require('jasmine-data-provider')

describe("Validating the result grid of a Calculator App", function () {

    function dataProviders(){
        return [
            {calculationData1:Objects.testData.calculationData1, calculationData2: Objects.testData.calculationData2},
            {calculationData1:Objects.testData.calculationData3, calculationData2:Objects.testData.calculationData4},
            {calculationData1:Objects.testData.calculationData4, calculationData2:Objects.testData.calculationData1}
        ];
    }

    DataProvider(dataProviders, function(data) {

        it("Performing Calc operations",function () {

            browser.get(Objects.appUrl);
            browser.manage().window().maximize();

            element(by.model(Objects.locators.calculatorPage.firstTextBox)).sendKeys(data.calculationData1);
            element(by.model(Objects.locators.calculatorPage.secondTextBox)).sendKeys(data.calculationData2);
            element(by.id(Objects.locators.calculatorPage.goButton)).click();
        });
    })


    it("Printing the first Row data", function () {

        element(by.repeater("result in memory").row(0)).getText().then(function (rowData) {

            console.log("The first Row data: "+ rowData);
        })
    });

    it("Printing the first Column data", function () {

        element.all(by.repeater("result in memory").column("result.value")).getText().then(function (columnData) {

            console.log("The first Column data: "+ columnData);
        })
    });

    it("Printing all the records", function () {

        element.all(by.repeater("result in memory")).getText().then(function (recordsData) {

            console.log("All the records: "+ recordsData);
        })
    })

    it("Printing all the records in separate line",function () {

        element.all(by.repeater("result in memory")).getText().then(function (recordsData) {

            var noOfRecords= recordsData.length;
            for (var i=0; i<noOfRecords; i++){
                element(by.repeater("result in memory").row(i)).getText().then(function (record) {

                    console.log(record);
                })
            }
        })
    })
});
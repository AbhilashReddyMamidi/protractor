describe("Validating the result grid of a Calculator App", function () {

    it("Performing Calc operations",function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        browser.manage().window().maximize();

        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("19");
        element(by.model("second")).sendKeys("19");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("20");
        element(by.model("second")).sendKeys("20");
        element(by.id("gobutton")).click();
    });

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
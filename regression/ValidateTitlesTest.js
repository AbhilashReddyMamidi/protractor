describe("Validating Title's of a page", function(){

  var title;

  beforeEach(function () {

    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    browser.manage().window().maximize();
    title = browser.getTitle();
  })

  it('Validating Banking App title in a Happy path', function(){

    title.then(function (text) {
        console.log(text);
        expect(text).toEqual("Protractor practice website - Banking App");
    })
  });

  it('Validating Banking App title in a Non-Happy path', function(){

    title.then(function (text) {
      console.log(text);
      expect(text).toEqual("Protractor123 practice website - Banking App");
    })
  });

});
describe('Entering text and fetching text in Regression Test2', function(){

it('executing the text box', function(){

  browser.get('https://angularjs.org');
   browser.manage().window().maximize();
  element(by.model('yourName')).sendKeys('Abhi');
  element(by.binding('yourName')).getText().then(function(text){
    console.log(text);
  });
})

  it('executing the text box', function(){

    browser.get('https://angularjs.org');
    browser.manage().window().maximize();
    element(by.model('yourName')).sendKeys('Mamidi');
    element(by.binding('yourName')).getText().then(function(text){
      console.log(text);
    });
  })


});
describe('MainCtrl', function() {
  var controller,
      dataService;

  it('should redirect `index.html` to `index.html#!/phones', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/phones');
  });
  
  // beforeEach(function () {
  //     module('app',['radar']);
    
  //     inject(function (){
  //       dataService = $injector.get('dataService');
  //       controller = $injector.get('$controller')("dataService");
  //     });
  // });
  
  // describe("Initialization", function (){
    
  //     it('should contain MainCtrl', inject(function($controller) {
  //       //spec body
  //       var Ctrl = $controller('MainCtrl', dataService);
  //       expect(Ctrl).toBeDefined();
  //     }));
    
  // });

  // describe('app controller', function(){

  //     it('should contain MainCtrl', inject(function($controller) {
  //       //spec body
  //       var Ctrl = $controller('MainCtrl');
  //       expect(Ctrl).toBeDefined();
  //     }));

  //   });
});
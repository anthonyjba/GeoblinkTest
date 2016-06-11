describe('MainCtrl', function() {
  var controller,
      dataService;
      
      beforeEach(function () {
          module('demoApp');
        
          inject(function (){
            dataService = $injector.get('dataService');
            controller = $injector.get('$controller')("dataService");
          });
      });

  // it('should redirect `index.html` to `index.html#!/phones', function() {
  //   browser.get('index.html');
  //   expect(browser.getLocationAbsUrl()).toBe('/phones');
  // });
  
    it('should contain MainCtrl', inject(function($controller) {
      //spec body
      var Ctrl = $controller('MainCtrl');
      expect(Ctrl).toBeDefined();
    }));

  
});
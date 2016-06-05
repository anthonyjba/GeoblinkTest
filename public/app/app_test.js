'use strict';

describe('app module', function() {

  beforeEach(module('app'));

  describe('app controller', function(){

    it('should contain MainCtrl', inject(function($controller) {
      //spec body
      var Ctrl = $controller('MainCtrl');
      expect(Ctrl).toBeDefined();
    }));

  });
});
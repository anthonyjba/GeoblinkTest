'use strict';

describe('demoApp controllers', function() {
  
    beforeEach(module('demoApp.controllers'));          
    beforeEach(function () {
        module('demoApp.services');
    });
    
    describe('MainCtrl', function() {
      var scope
        , vm
        , service
        , $httpBackend;
      beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, dataService) {
          //console.log('*** IN INJECT!! ***');
          $httpBackend = _$httpBackend_;
          scope = $rootScope.$new();
          service = dataService;
          vm = $controller('MainCtrl', {
              $scope: scope,
              dataService: service
          });
      }));

      it('should set the correct showGMaps value', function() {
          expect(vm.showGMaps).toBe(false);
      });
      
      it('should set the correct urlData service', function() {
          expect(vm.urlData).toBe('http://localhost:3000/dataTest/');
      });
    });
  
});
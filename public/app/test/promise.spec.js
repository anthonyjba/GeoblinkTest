'use strict';

describe('Testing a Controller that uses a Promise', function () {
    var $scope;
    var $q;
    var deferred;
    var vm;
    var dataTest = [
        { id: 1, address : 'address X',
          variables: { population: 9084, is_reference: true}
        },
        { id: 2, address : 'address Y',
          variables: { population: 5759, is_reference: false}
        },
        { id: 3, address : 'address Z',
          variables: { population: 1523, is_reference: false}
        }
      ];
    
    beforeEach(module('demoApp.controllers'));          
    beforeEach(function () {
        module('demoApp.services');
    });
        
    beforeEach(inject(function($controller, _$rootScope_, _$q_, dataService) {
        $q = _$q_;
        $scope = _$rootScope_.$new();
        // We use the $q service to create a mock instance of defer
        deferred = _$q_.defer();
        
        // Use a Jasmine Spy to return the deferred promise
        spyOn(dataService, 'getData').and.returnValue(deferred.promise);
        
        // Init the controller, passing our spy service instance
        vm = $controller('MainCtrl', { 
          $scope: $scope, 
          dataService: dataService
        });
    }));
    
    it('should resolve promise', function () {
        // Setup the data we wish to return for the .then function in the controller
        deferred.resolve(dataTest);          
        vm.loadDataService();
        
        // We have to call apply for this to work
        $scope.$apply();
        
        // Since we called apply, not we can perform our assertions
        expect(vm.json).not.toBe(undefined);
        expect(vm.json.length).toBe(3);
        expect(vm.error).toBe(undefined);          
    });
      
    it('should reject promise', function () {
        // This will call the .catch function in the controller
        deferred.reject();
        vm.loadDataService();
        
        // We have to call apply for this to work
        $scope.$apply();
        
        // Since we called apply, not we can perform our assertions
        expect(vm.json).toBe(undefined);
        expect(vm.error).toBe('There has been an error!');
      });

});
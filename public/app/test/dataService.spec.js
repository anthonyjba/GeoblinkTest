'use strict';

describe('Testing $q directly', function () {
    var deferred;
    var $q;
    var $rootScope;
    
    beforeEach(inject(function(_$q_, _$rootScope_) {
      $q = _$q_;
      $rootScope = _$rootScope_;
      deferred = _$q_.defer();
    }));
    
    it('should resolve promise', function () { 
      var response;
      deferred.promise.then(function(data) {
        response = data;
      });
      deferred.resolve('Returned OK!');
      $rootScope.$apply();
      expect(response).toBe('Returned OK!');
    });
        
    it('should reject promise', function () {
      var response;
      deferred.promise.then(function(data) {
        response = data;
      });
      deferred.promise.catch(function(data) {
        response = 'Error: ' + data;
      });
      deferred.reject('500 Status');
      $rootScope.$apply();
      expect(response).toBe('Error: 500 Status');
    });
  });

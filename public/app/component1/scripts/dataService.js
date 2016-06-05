(function () {
    'use strict';

    /**
	 * Servicio de Cubo
	 */
    angular
	  .module('app')
	  .factory('dataService', dataService);
    
    function dataService ($http, $q) {  
        return {
            getData: getData
        }

        function getData (url) {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.get(url)
                .success(function(data) {
                    defered.resolve(data);
                })
                .error(function(err) {
                    defered.reject(err)
                });

            return promise;
        }
    }
    
})();


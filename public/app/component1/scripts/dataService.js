(function () {
    'use strict';

   /**
	 * Data Service
	 */
    angular
	  .module('demoApp.services',[])
	  .factory('dataService',  ['$http', '$q',dataService]);
    
    function dataService ($http, $q) {  
        return {
            getData: getData
        }

        function getData (url) {
            var defered = $q.defer();

            $http.get(url)
                .success(function(data) {
                    defered.resolve(data);
                })
                .error(function(err) {
                    defered.reject(err)
                });

            return  defered.promise;
        }
    }
    
})();


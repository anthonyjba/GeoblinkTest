angular.module('demoApp').factory('HttpService', function($http) {
    var service = {
        query: function() {
            return $http.get('/dataTest');
            
        },
        get: function(id) {
            return $http.get('/dataTest/' + id);
        },
        // making save dual-function like default ngResource behavior (no separate update w/PUT)
        save: function(data) {
            if(angular.isDefined(data.id)) {
                return $http.post('/dataTest/' + data.id, data);
            } else {
                return $http.post('/dataTest', data);
            }
        },
        delete: function(id) {
            return $http.delete('/dataTest/' + id);
        }
    };
    
    return service;    
})
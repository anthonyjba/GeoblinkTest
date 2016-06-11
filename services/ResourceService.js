angular.module('demoApp').factory('ResourceService', function($resource) {
    return $resource('/dataTest/:id', {gameid: '@id'});
});
/**
*  Module: authService
*
*  Description: Get token form expres api "/api/authenticate" [POST]
*/
angular.module('authService', []).factory('Auth', ['$http', function($http) {

    return {
        // send username and password to get a token
        authenticate : function(credentials) {
            return $http({
                method: 'POST',
                url: '/api/authenticate/',
                data: credentials,
            }).then(function successCallback(response) {
                console.log(response);

                if(response.data.success){
                    localStorage.setItem("token", response.data.token);
                }
            }, function errorCallback(response) {
                console.log(response);
            });
        },
    }       

}]);
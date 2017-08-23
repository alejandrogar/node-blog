/**
*  Module: authService
*
*  Description: Get token form expres api "/api/authenticate" [POST]
*/
angular.module('authService', []).factory('Auth', ['$http', function($http) {

    return {
        // send username and password to get a token
        authenticate : function(credentials, success, error) {
            return $http({
                method: 'POST',
                url: '/api/authenticate/',
                data: credentials,
            }).then(function successCallback(response) {
                if(response.data.success){
                    localStorage.setItem("token", response.data.token);
                    success(response);
                }else{
                    Materialize.toast("Error", 4000, "red"); // 4000 is the duration of the toast
                }
            }, function errorCallback(response) {
                error(response);
            });
        },
        createAccount : function(userData, success, error) {
            return $http({
                method: 'POST',
                url: '/api/users/',
                data: userData,
            }).then(function successCallback(response) {
                if(response.data.success){
                    localStorage.setItem("token", response.data.token);
                    success(response);
                }else{
                    Materialize.toast("Error", 4000, "red"); // 4000 is the duration of the toast
                }
            }, function errorCallback(response) {
                error(response);
            });
        },        
    }       

}]);
/**
*  Module: postService
*
*  Description: get and create post form de express api "/api/posts" [GET, POST]
*/
angular.module('categoryService', []).factory('Category', ['$http', function($http) {

    return {
        // get all items finded from post collection on express 
        // api and mongo
        get : function(success) {
            return $http.get('/api/categories');
        },

        // crete a new post if the user have an blogger account 
        // can create an account on Auth service: /services/authService
        post : function(catData, success) {
            var token = localStorage.token;
            if(typeof(token) == "undefined"){
                localStorage.setItem("token", "no-token-saved");
                return JSON({message: "token required"});
            }else{
                return $http({
                    method: 'POST',
                    url: '/api/categories',
                    data: catData,
                    headers: {
                        "x-access-token": token
                    }
                }).then(function(response){
                    success(response);
                });
            }
        },
    }       

}]);
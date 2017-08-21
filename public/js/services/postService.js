/**
*  Module: postService
*
*  Description: get and create post form de express api "/api/posts" [GET, POST]
*/
angular.module('postService', []).factory('Post', ['$http', '$q', function($http, $q) {

        return {
            // get all items finded from post collection on express 
            // api and mongo
            get : function(success) {
                return $http.get('/api/posts');
            },
            getPost : function(id,success) {
                return $http.get('/api/posts/'+id);
            },
            getRelatedPost : function(category, current,success) {
                return $http.get('/api/posts-by-category/'+category).then(function(response){
                    success(response);
                });
            },

            // crete a new post if the user have an blogger account 
            // can create an account on Auth service: /services/authService
            post : function(postData, success){
                var token = localStorage.token;
                if(typeof(token) == "undefined"){
                    localStorage.setItem("token", "no-token-saved");
                    return JSON({message: "token required"});
                }else{
                    return $http({
                        url: '/api/posts',
                        method: 'POST',
                        data: postData,
                        headers: {
                            "x-access-token": token,
                            "Content-Type":undefined
                        }
                    }).then(function(response){
                        success(response);
                    });
                }
            },           
        }       

    }]);

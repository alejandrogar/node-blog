angular.module('AppRoutes', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/home.tpl.html",
        controller: "homeCtrl"
    })
    .when("/login", {
        templateUrl : "./views/login.tpl.html",
        controller: "loginCtrl"
    })
    .when("/add-post", {
        templateUrl : "./views/add_post.tpl.html",
        controller: "addPostCtrl",
        resolve:{
            "check":function($location){ 
                if(typeof(localStorage.token) != "undefined" && localStorage.token != "no-token-saved"){ 
                    //Do something
                }else{
                    $location.path('/login');
                }
            }
        }
    })
    .when("/post/:id", {
        templateUrl : "./views/view_post.tpl.html",
        controller: "addPostCtrl",
    })
    .when("/add-category", {
        templateUrl : "./views/add_category.tpl.html",
        controller: "addCatCtrl"
    })
    .otherwise({
        redirectTo: "/"
    });

    $locationProvider.html5Mode(true);

});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
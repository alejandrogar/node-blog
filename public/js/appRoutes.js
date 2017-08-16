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
    })/*
    .when("/add-post", {
        templateUrl : "add_post.tpl.html",
        controller: "addPostCtrl"
    })
    .when("/posts/:postID", {
        templateUrl : "post_detail.tpl.html",
        controller: "postDetailCtrl"
    })*/
    .otherwise({
        redirectTo: "/"
    });

    $locationProvider.html5Mode(true);

});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
/*
*  nodeBlog
*/
var app = angular.module('nodeBlog', [
	'ngRoute', 
	'AppRoutes', 
	'postService', 
	'authService',
	'categoryService',
	'ngAnimate',
	'ngSanitize'
]);

app.controller('loginCtrl', function($scope, Auth) {

	$scope.login = function(){
		Auth.authenticate({
			email:$scope.email,
			password:$scope.password
		}, function(response){
			console.log(response);
			window.location="/";
		},function(response){
			console.log(response);
		});
	};
});

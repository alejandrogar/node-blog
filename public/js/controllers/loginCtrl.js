app.controller('loginCtrl', function($scope, Auth) {

	$scope.submit = function(){
		if($scope.create){
			$scope.createAccount();
		}else{
			$scope.login();
		}
	}

	$scope.create = false;
	$scope.login = function(){		
		Materialize.toast('Authenticating...', 3000) // 4000 is the duration of the toast
		Auth.authenticate({
			email:$scope.email,
			password:$scope.password
		}, function(response){
			console.log(response);
			window.location="/";
		},function(response){
			console.log(response);
			if(!response.data.success){
				Materialize.toast('Error', 3000) // 4000 is the duration of the toast
			}
		});
	};

	$scope.createAccount = function(){
		localStorage.token = "no-token-saved";
		Materialize.toast('Creating...', 3000) // 4000 is the duration of the toast
		Auth.createAccount({
			email:$scope.email,
			password:$scope.password,
			name: $scope.name,
			user: $scope.user
		}, function(response){
			console.log(response);
			window.location="/";
		},function(response){
			console.log(response);
			if(!response.data.success){
				Materialize.toast('Error', 4000) // 4000 is the duration of the toast
			}
		});
	};
});

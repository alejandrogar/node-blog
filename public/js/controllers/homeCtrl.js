app.controller('homeCtrl', function($scope, $http, $q, Post, Auth, Category) {
	$scope.home = "HOME";

	//Auth.authenticate({user:"manuel",password:"qd3d10x"});
	/*Post.post(JSON.stringify({title:"Hlelo",content:"Blablablablabla", category:"5979288701334f077871620d"}), function(response){
		console.log(response);
	});*/
	
	//console.log(Category.post(JSON.stringify({name:"Arte"})));

	$q.all([Category.get(), Post.get()]).then(function(result){
		$scope.categories = result[0].data.categories;
		$scope.articles = result[1].data.posts;
		console.log($scope.articles);
	});

});

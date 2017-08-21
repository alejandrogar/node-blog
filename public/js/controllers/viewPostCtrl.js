app.controller('addPostCtrl', function($scope, $http, $q, Post, Auth, Category, $routeParams) {

	//Auth.authenticate({user:"manuel",password:"qd3d10x"});

	//console.log(Category.post(JSON.stringify({name:"Arte"})));

	$q.all([Post.getPost($routeParams.id)]).then(function(result){
		$scope.article = result[0].data.post;
		console.log($scope.article.category._id);
		Post.getRelatedPost($scope.article.category._id, $scope.article._id, function(response){
			$scope.relatedPosts = response.data.posts;
		});
	});
});
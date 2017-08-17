app.controller('addPostCtrl', function($scope, $http, $q, Post, Auth, Category) {

	//Auth.authenticate({user:"manuel",password:"qd3d10x"});

	//console.log(Category.post(JSON.stringify({name:"Arte"})));

	$q.all([Category.get()]).then(function(result){
		$scope.categories = result[0].data.categories;
	});

	$scope.category = "select_cat";

	$scope.savePost = function(){

		console.log(tinymce.activeEditor.getContent());

		console.log($scope.image);
		var dataPost = new FormData();
       	dataPost.append('title', $scope.title);
       	dataPost.append('description', $scope.description);
       	dataPost.append('content', tinymce.activeEditor.getContent());
       	dataPost.append('category', $scope.category);
       	dataPost.append('image', $scope.image);
		console.log(dataPost);

		Post.post(dataPost, function(response){
			console.log(response);
		});
	}
});
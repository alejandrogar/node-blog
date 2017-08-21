app.controller('addPostCtrl', function($scope, $http, $q, Post, Auth, Category) {

	//Auth.authenticate({user:"manuel",password:"qd3d10x"});

	//console.log(Category.post(JSON.stringify({name:"Arte"})));

	$q.all([Category.get()]).then(function(result){
		$scope.categories = result[0].data.categories;
	});

	$scope.category = "select_cat";

	$scope.savePost = function(){

		var dataPost = new FormData();
       	dataPost.append('title', $scope.title);
       	dataPost.append('description', $scope.description);
       	dataPost.append('image', $scope.image);
       	dataPost.append('content', tinymce.activeEditor.getContent());
       	dataPost.append('category', $scope.category);

		console.log($scope.image);

		Post.post(dataPost, function(response){
			console.log(response);
			if(response){
				
			}
		});
	}
});
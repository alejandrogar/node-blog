app.controller('addPostCtrl', function($scope, $http, $q, Post, Auth, Category, $compile) {

	//Auth.authenticate({user:"manuel",password:"qd3d10x"});

	//console.log(Category.post(JSON.stringify({name:"Arte"})));

	$q.all([Category.get()]).then(function(result){
		$scope.categories = result[0].data.categories;
		console.log(result);
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
			if(response.data.success){
			  	Materialize.toast('Post published', 4000) // 4000 is the duration of the toast
			}else{
				var $messageHTML = $('<span>'+response.data.message+'</span>').add($('<button class="btn-flat toast-action" ng-click="dismiss()">Close</button>')).add($('<a class="btn-flat toast-action" href="/login">Login</a>'));
  				Materialize.toast($messageHTML, 10000);	 
  				$compile($messageHTML)($scope);
			}
		});
	}

	$scope.dismiss = function(){
		var toastElement = $('.toast').first()[0];
  		var toastInstance = toastElement.M_Toast;
  		toastInstance.remove();	
	}
});
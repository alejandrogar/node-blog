app.controller('addCatCtrl', function($scope, $http, $q, Auth, Category, $compile) {

	$q.all([Category.get()]).then(function(result){
		$scope.categories = result[0].data.categories;
	});

	$scope.addCategory = function(){
		Category.post({name:$scope.addCat}, function(response){
			console.log(response);
			if(response.data.success){
				$scope.categories.push(response.data.category);
				Materialize.toast('Category added', 3000);
			}else{
				Materialize.toast('Error', 3000, "red");
			}
		});
	}
});
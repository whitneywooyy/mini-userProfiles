var app = angular.module('userProfiles');

app.controller('mainController', function($scope, mainService){
	$scope.getUsers = function(){
		$scope.users = mainService.getUsers();
	}
	$scope.getUsers();
}); //end app.controller
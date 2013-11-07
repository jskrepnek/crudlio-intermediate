var controllers = controllers || angular.module('controllers', []);

controllers.controller('editCtrl', ['$scope', 'studentsSrv', '$routeParams', '$location', function($scope, studentsSrv, $routeParams, $location) {

	$scope.saved = studentsSrv.get($routeParams.id);
	$scope.student = angular.copy($scope.saved);

	$scope.save = function() {
		angular.copy($scope.student, $scope.saved);
		$location.path('/');		
	};

}]);
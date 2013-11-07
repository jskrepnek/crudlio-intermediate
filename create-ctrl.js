var controllers = controllers || angular.module('controllers', []);

controllers.controller('createCtrl', ['$scope', 'studentsSrv', '$location', function($scope, studentsSrv, $location) {
  
  $scope.student = {};

  $scope.save = function() {
    
    studentsSrv.create($scope.student);
    $location.path('/');
  };

}]);
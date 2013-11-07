
var controllers = controllers || angular.module('controllers', []);

controllers.controller('listCtrl', function($scope, studentsSrv) {
  
    $scope.students = studentsSrv.get();

    $scope.delete = function (student) {
		studentsSrv.delete(student);    		
    };
    
  });
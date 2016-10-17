angular.module('devMountainSocial')
.controller('friendProfileCtrl', function($scope, $stateParams, mainSrvc) {

$scope.getUsers = mainSrvc.getUsers();

$scope.userInfo = function() {
  for (var i = 0; i < $scope.getUsers.length; i++) {
    if ($scope.getUsers[i].id.toString() === $stateParams.id) {
      $scope.friend = $scope.getUsers[i];
      break;
    }
  }
};
$scope.userInfo();



});

angular.module('devMountainSocial').controller('updateProfileCtrl', function($scope, $state, mainSrvc) {

  $scope.currentUser = JSON.parse(localStorage.getItem('user'));

  $scope.updateUser = function(){
    mainSrvc.createUser($scope.currentUser);
    $state.go('landing');
  };



});

angular.module('devMountainSocial')
.controller('mainCtrl', function($scope, $state, mainSrvc) {

  $scope.$state = $state;

  $scope.createUser = function(){
    mainSrvc.createUser($scope.currentUser);
    $state.go('landing');
  };



});

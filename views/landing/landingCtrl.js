angular.module('devMountainSocial').controller('landingCtrl', function($scope, $state, mainSrvc) {

  $scope.currentUser = JSON.parse(localStorage.getItem('user'));


});

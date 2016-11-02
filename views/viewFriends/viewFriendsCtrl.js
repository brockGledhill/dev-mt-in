angular.module('devMountainSocial').controller('viewFriendsCtrl', function($scope, $state, mainSrvc) {

$scope.sortProp = '';
$scope.sortDirection = true;

$scope.currentUser = JSON.parse(localStorage.getItem('user'));

// $scope.getFriends = mainSrvc.getUsers();


});

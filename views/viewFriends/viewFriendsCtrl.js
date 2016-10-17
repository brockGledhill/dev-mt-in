angular.module('devMountainSocial').controller('viewFriendsCtrl', function($scope, $state, mainSrvc) {

$scope.sortProp = '';
$scope.sortDirection = true;

// $scope.users = mainSrvc.getUsers();

$scope.currentUser = JSON.parse(localStorage.getItem('user'));

$scope.getUsers = function() {
  mainSrvc.getUsers().then(function(response){
    $scope.users = response.data;
  });
};

});

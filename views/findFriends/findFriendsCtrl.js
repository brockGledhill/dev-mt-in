angular.module('devMountainSocial').controller('findFriendsCtrl', function($scope, mainSrvc) {

  $scope.currentUser = JSON.parse(localStorage.getItem('user'));

  $scope.searchFriends = function() {
    mainSrvc.searchFriends($scope.searchName).then(function(response){
      $scope.users = response.data;
    });
  };

  // $scope.keyPress = function(keycode){
  //   if ($event.keycode === 13) {
  //     console.log(keycode);
  //     $scope.searchFriends();
  //   }
  // };




});

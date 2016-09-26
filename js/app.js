var devMountainSocial = angular.module('devMountainSocial', ['ui.router']);

devMountainSocial.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'file:///Users/brockgledhill/repos/dev-mt-in/views/home.html'
  })

  .state('viewFriends', {
    url: '/viewFriends',
    templateUrl: 'file:///Users/brockgledhill/repos/dev-mt-in/views/viewFriends.html'
  })

  .state('findFriends', {
    url: '/findFriends',
    templateUrl: 'file:///Users/brockgledhill/repos/dev-mt-in/views/findFriends.html'
  })

  .state('updateProfile', {
    url: '/updateProfile',
    templateUrl: 'file:///Users/brockgledhill/repos/dev-mt-in/views/findFriends.html'
  });







});

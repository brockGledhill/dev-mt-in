var devMountainSocial = angular.module('devMountainSocial', ['ui.router']);

devMountainSocial.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
        url: '/',
        templateUrl: 'views/home/home.html',
        controller: 'mainCtrl'
    })

    .state('landing', {
        url: '/landing',
        templateUrl: 'views/landing/landing.html',
        controller: 'landingCtrl'
    })

    .state('viewFriends', {
        url: '/viewFriends',
        templateUrl: 'views/viewFriends/viewFriends.html',
        controller: 'viewFriendsCtrl'
        //do a resolve for every state so it can't go to the view before creating a profile (also do a swal to alert to create a profile)
    })

    .state('findFriends', {
        url: '/findFriends',
        templateUrl: 'views/findFriends/findFriends.html',
        controller: 'findFriendsCtrl'
    })

    .state('updateProfile', {
        url: '/updateProfile',
        templateUrl: 'views/updateProfile/updateProfile.html',
        controller: 'updateProfileCtrl'
    })

    .state('friendProfile', {
        url: '/friendProfile/:id',
        templateUrl: 'views/friendProfile/friendProfile.html',
        controller: 'friendProfileCtrl'
    });







});

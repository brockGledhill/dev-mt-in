angular.module('devMountainSocial').service('mainSrvc', function($q, $http) {

    // var users = [{
    //     'firstName': 'Emma',
    //     'lastName': 'Gledhill',
    //     'tagline': 'Dimple Cheek',
    //     'profilePic': 'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-0/p206x206/14100454_10154312059595953_7356482889466925441_n.jpg?oh=82f85349ff919ed8833dd862c521afea&oe=58AD3233',
    //     'bio': 'The Hottie Wife',
    //     '_id': 0,
    //     'friends': []
    // }, {
    //     'firstName': 'Moose',
    //     'lastName': 'Gledhill',
    //     'tagline': 'Middle Child',
    //     'profilePic': 'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/12565484_10153790902970953_4585963831876753386_n.jpg?oh=c1d2203608ccc1507c3b4068768669b2&oe=58AC4523',
    //     'bio': 'The Wigglebutt',
    //     '_id': 1,
    //     'friends': []
    // }, {
    //     'firstName': 'Coco',
    //     'lastName': 'Gledhill',
    //     'tagline': 'Diva needs to eat a snickers',
    //     'profilePic': 'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/12705674_10153826257750953_355791887812351844_n.jpg?oh=ac22d003257163770a73de5c3eca018f&oe=589E11E3',
    //     'bio': 'Miss Priss',
    //     '_id': 2,
    //     'friends': []
    // }, {
    //     'firstName': 'Dano',
    //     'lastName': 'Gledhill',
    //     'tagline': 'Mr. Huff n Puff',
    //     'profilePic': 'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/11206116_10153273261455953_3151811197233121302_n.jpg?oh=b5e55ca4d4926b3ae3868e92e1385855&oe=589C4238',
    //     'bio': 'The First Born',
    //     '_id': 3,
    //     'friends': []
    // }, {
    //     'firstName': 'Brock',
    //     'lastName': 'Gledhill',
    //     'tagline': 'Hottie McHottie',
    //     'profilePic': 'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/10152380_10155330269145177_2342670722292574731_n.jpg?oh=a3911cbb39302e9bd9064a2c4cdd6932&oe=58AA0E09',
    //     'bio': 'The Husband',
    //     '_id': 4,
    //     'friends': []
    // }];

    this.createUser = function(input) {
        localStorage.setItem('user', JSON.stringify(input));
        console.log(localStorage.user);
    };

    this.getUsers = function() {
      return $http({
        method: 'GET',
        url: 'http://connections.devmounta.in/api/profiles?id='
      });
    };

    this.searchFriends = function(name){
      return $http({
        method: 'GET',
        url: 'http://connections.devmounta.in/api/profiles?name=' + name
      });
    };

    //trying to access pseudo element to put profile pic in triangle
    // this.getUserProfilePic = window.getComputedStye(
    //   document.querySelector('.front-triangle'), ':before')
    //   .getPropertyValue('background-image');



});

angular.module('devMountainSocial').service('mainSrvc', function($http, $q) {

    //Creates a new user profile and saves it to local storage.
    //Still need to figure out how to push it to api
    this.createUser = function(input) {
        input.name = input.firstName + input.lastName;
        console.log(name);
        localStorage.setItem('user', JSON.stringify(input));
        // $http({
        //     method: 'POST',
        //     url: 'http://connections.devmounta.in/api/profiles?' + input
        // });
    };

    // Stores users' data in local storage after clicking the save button on either form.
    // this.checkForCurrentUser = function() {
    //     var deferred = $q.defer();
    //     //check localstorage for user key
    //     if (localStorage.getItem('user')) {
    //         deferred.resolve(localStorage.user);
    //     } else {
    //         deferred.reject();
    //     }
    //     return deferred.promise;
    // };

    this.getUsers = function() {
        return $http({
            method: 'GET',
            url: 'http://connections.devmounta.in/api/profiles'
        });
    };

    // getUsersId function will find individual user from api by ID when view profile button is clicked
    // this.getUsersID = function() {
    //   return $http({
    //     method: 'GET',
    //     url: 'http://connections.devmounta.in/api/profiles'
    //   });
    // };

    // searchFriends function will get users from api by name to be able to filter through when a search is done
    // this.searchFriends = function(name){
    //   return $http({
    //     method: 'GET',
    //     url: 'http://connections.devmounta.in/api/profiles?name=' + name
    //   });
    // };

    ////API////
    // this.getPeople = function(name){
    // var deferred = $q.defer();
    // $http({
    //   method: 'GET',
    //   url: 'http://connections.devmounta.in/api/profiles?name=' + name
    // }).then(function(res){
    //   deferred.resolve(res.data);
    // });
    // return deferred.promise;
    // };

    // gets searched user's profile by id
    // this.getProfile = function(id){
    // var deferred = $q.defer();
    // $http({
    //   method: 'GET',
    //   url: 'http://connections.devmounta.in/api/profiles/' + id
    // }).then(function(res){
    //   deferred.resolve(res.data);
    // });
    // return deferred.promise;
    // };

    // add and remove friend buttons
    // var friends = [];
    // this.currentlyFriends = false;
    //   this.addFriend = function(obj) {
    //         this.currentlyFriends = true;
    //         for (var i = 0; i < friends.length; i++){
    //       if (friends[i]._id === obj._id){
    //         return;
    //       }
    //     }
    //     friends.push(obj);
    //   };
    //
    //
    //     this.removeFriend = function(obj) {
    //         this.currentlyFriends = false;
    //         for (var i = friends.length - 1; i >= 0; i--) {
    //             if (friends[i]._id === obj._id) {
    //                 friends.splice(i, 1);
    //             }
    //         }
    //     };
    //
    //
    //   this.getFriends = function(){
    //     return friends;
    //   };
    //
    // });




});

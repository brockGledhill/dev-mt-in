angular.module('devMountainSocial').service('mainSrvc', function($http) {

    //trying to create a new user profile that will be saved to local storage
    //and be pushed to api
    this.createUser = function(input) {
        input.name = input.firstName + input.lastName;
        console.log(name);
        localStorage.setItem('user', JSON.stringify(input));
        $http({
            method: 'POST',
            url: 'http://connections.devmounta.in/api/profiles?' + input
        });
    };

    this.getUsers = function() {
        return $http({
            method: 'GET',
            url: 'http://connections.devmounta.in/api/profiles'
        });
    };

    //getUsersId function will find individual user from api by ID when view profile button is clicked
    // this.getUsersID = function() {
    //   return $http({
    //     method: 'GET',
    //     url: 'http://connections.devmounta.in/api/profiles'
    //   });
    // };
    //
    //searchFriends function will get users from api by name to be able to filter through when a search is done
    // this.searchFriends = function(name){
    //   return $http({
    //     method: 'GET',
    //     url: 'http://connections.devmounta.in/api/profiles?name=' + name
    //   });
    // };




});

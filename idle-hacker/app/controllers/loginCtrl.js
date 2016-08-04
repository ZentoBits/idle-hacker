app.controller("loginCtrl", function($scope, $location, AuthFactory) {

    $scope.register = function() {

      AuthFactory.authWithProvider().then(function(){
      	console.log('HEY BITCH')
      });
    }

    if ($location.path() === "/logout"){
      AuthFactory.logout();
    }
})
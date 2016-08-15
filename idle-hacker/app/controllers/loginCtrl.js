app.controller("loginCtrl", function($scope, $location, AuthFactory, DataFactory) {

    $scope.register = function() {

      AuthFactory.authWithProvider();
      
      	// $scope.userId = AuthFactory.getUser();
      	// DataFactory.getStats($scope.userId)
      	// .then(function(data) {
      	// 	if ( data.uid ) {
      	// 		console.log("this is true", data.uid);
      	// 	} else {
      	// 		console.log("this is false", data.uid);
      	// 	}
      	// 	console.log(data);
      	// });
      	console.log('HEY BITCH')
    }

    $scope.goToGame = function() {
    	$location.path("/clicker");
    }

    if ($location.path() === "/logout"){
      AuthFactory.logout();
    }

});
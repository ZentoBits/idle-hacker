var app = angular.module('IdleHacker', ['ngRoute'])



.constant("firebaseURL", "https://idlehacker-76c77.firebaseio.com/");

app.config(function($routeProvider, FireCreds) {
 const authConfig = {
  apiKey: FireCreds.apiKey,
  authDomain: FireCreds.authDomain,
  databaseURL: FireCreds.databaseURL,
  storageBucket: FireCreds.storageBucket
 };

 firebase.initializeApp(authConfig);

$routeProvider.
	when('/', {
		templateUrl: 'partials/login.html',
		controller: 'loginCtrl'
	})
	.when('/clicker', {
		templateUrl: 'partials/clicker.html',
		controller: 'clickerCtrl'
	})
	.when('/logout', {
		templateUrl: 'partials/login.html',
		controller: 'loginCtrl'
	});
});

app.factory("AuthFactory", function() {

	let currentUserId = null;
	let provider = new firebase.auth.GoogleAuthProvider();


	// firebase.auth().onAuthStateChanged(function(user) {
	// 	if (user) {
	// 		console.log("user logged in", user.uid);
	// 		currentUserId = user.uid;
	// 	} else {
	// 		console.log("user not logged in");
	// 	}
	// });

	let authWithProvider = function() {
		return firebase.auth().signInWithPopup(provider);
	};

	let logout = function() {
		currentUserId = null;
		return firebase.auth().signOut();
	};

	let isAuthenticated = function() {
		return (currentUserId) ? true : false;
	};

	let getUser = function() {
		return currentUserId;
	};

	return { authWithProvider, isAuthenticated, getUser, logout };
});

app.run(["$location", "FireCreds", "AuthFactory", function ($location, FireCreds, AuthFactory){
 const authConfig = {
  apiKey: FireCreds.apiKey,
  authDomain: FireCreds.authDomain,
  databaseURL: FireCreds.databaseURL,
  storageBucket: FireCreds.storageBucket
 };

 firebase.initializeApp(authConfig);

 firebase.auth().onAuthStateChanged(function (user){
  if (user){
   AuthFactory.setUser(user.uid); // set current user upon login and switch to main view
   $location.url("/main");
   $scope.$apply();
   console.log("user/main", user.uid);
  } else {
   AuthFactory.setUser(null);   //this is to test the current user to hide board.
   $location.url("/");
   $scope.$apply();
  }
 });
}]);






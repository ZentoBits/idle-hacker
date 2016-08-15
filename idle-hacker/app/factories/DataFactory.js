app.factory("DataFactory", function(FireCreds, $q, $http) {
  let getStats = function(currentUserId) {
    console.log("user id data", currentUserId);
    let stats = [];
    return $q(function(resolve, reject) {
      $http.get(`https://idlehacker-76c77.firebaseio.com/users/.json?orderBy="uid"&equalTo="${currentUserId}"`).
      success(function(result) {
        if (result) {
          Object.keys(result).forEach(function(key) {
            result[key].id = key;
            stats.push(result[key]);
          })
        }
        console.log("stats", stats);
        resolve(stats[0]);
      }).error(function(error) {
        reject(error);
      })
    });
  }

  let postStats = function(currentUserId, scorbject) {
    console.log("post stats");
    return $q(function(resolve, reject) {
      $http.post(
        "https://idlehacker-76c77.firebaseio.com/users.json",
        JSON.stringify(scorbject)
        ).
      success(function(result) {
        resolve(result);
      }).error(function(error) {
        reject(error);
      });
    });
  }

  let saveStats = function(currentId, object) {
    console.log(currentId, object);
    return $q(function(resolve, reject) {
      $http.put(
        `https://idlehacker-76c77.firebaseio.com/users/${currentId}.json`,
        JSON.stringify(object)
        ).
      success(function(result) {
        resolve(result);
      }).error(function(error) {
        reject(error);
      });
    });
  }

  let deleteStats = function(currentId) {
    console.log("current id", currentId);
    return $q(function(resolve, reject) {
      $http.delete(
        `https://idlehacker-76c77.firebaseio.com/users/${currentId}.json`
        ).
      success(function(result) {
        resolve(result);
      }).error(function(error) {
        reject(error);
      });
    });
  }

//   let thing  = function(currentUser) {
//     console.log("currentUser", currentUser);

//     return $q(function(resolve, reject) {
//       $http.post("https://idlehacker-76c77.firebaseio.com/.json", currentUser)
//       .success(function(ObjFromFirebase) {
//         resolve(ObjFromFirebase);
//       })
//       .error(function(error) {
//         reject(error);
//       });
//     });
//   };

//   return {thing};
  return {getStats, postStats, saveStats, deleteStats};

});
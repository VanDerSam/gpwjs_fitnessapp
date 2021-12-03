/**
 * @module userManager
 * A module for managing users and user's data 
 */
 (function () {
    "use strict";
  
    var userList = [];
    var usersStore = {};
    var currentUserId = "";
    
    var buildUser = function (userData) {
        var user = new fitnessApp.User(userData.name);
        
        userData.sessions.forEach(function (session) {
            user.addSession(session.sessionDate, session.duration);
        });
        
        return user;
    };

    function addUser (userData) {
      var user = buildUser(userData);
      usersStore[userData.name] = user;
      
      return user;
    }
    
    function loadUserList (id, callback) {
        if (userList.length === 0) {
            gpwj.data.load(id, function (userListData) {
                userList = userListData;
                callback(userList);
            });
        } else {
            callback(userList);
        }
    }

    function loadUser (id, callback) {
      if (userList.indexOf(id) === -1) {
          return "User " + id + " not found";
      }

      var user = usersStore[id];
    
      if (user === undefined) {
        gpwj.data.load(id, function (userData) {
          var user = addUser(userData);
          currentUserId = id;
          callback(user);
        });    
      } else {
        currentUserId = id;
        callback(user);
      }
    }

    function getCurrentUser() {
        return usersStore[currentUserId];
    }
    
    if (window.fitnessApp === undefined) {
      window.fitnessApp = {};
    }
    
    fitnessApp.userManager = {
      loadUserList: loadUserList,
      loadUser: loadUser,
      getCurrentUser: getCurrentUser
    };
    
  })();
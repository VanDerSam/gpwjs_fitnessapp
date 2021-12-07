(function () {
    function loadUser (userId) {
        var error = fitnessApp.userManager.loadUser(userId, function(user) {
            fitnessApp.userView.render(user);
        });
        if (error !== undefined) {
            fitnessApp.messageView.render(error);
        } else {
            fitnessApp.messageView.clear();
        }
    }

    var loadSelectedUser = function () {
        var selectedUser = fitnessApp.userListView.getSelectedUser();
        loadUser(selectedUser);
    };

    var init = function () {
      fitnessApp.userManager.loadUserList("users", function (userList) {
        if (userList === null || userList.length === 0) {
            return;
        }  
        // fitnessApp.userManager.loadUser(userList[0], function(user) {
        //     fitnessApp.userView.render(user);
        // });
        fitnessApp.userListView.render(userList);
        loadUser(userList[0]);

        var buttonLoadUser = document.getElementById("loadUser");
        buttonLoadUser.addEventListener("click", loadSelectedUser);
    });
      
      return {
        log: function (sessionDate, duration) {
          var user = fitnessApp.userManager.getCurrentUser();
          user.addSession(sessionDate, duration);
          fitnessApp.userView.render(user);
          return "Thanks for logging your session.";
        },
        loadUser: loadUser
      };
    };
    
    if (window.fitnessApp === undefined) {
      window.fitnessApp = {};
    }
    
    fitnessApp.init = init;
    
  })();
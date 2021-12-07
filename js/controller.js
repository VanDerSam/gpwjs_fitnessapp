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

    function getById (id) {
        return document.getElementById(id);
    };

    var log = function (sessionDate, duration) {
        var user = fitnessApp.userManager.getCurrentUser();
        user.addSession(sessionDate, duration);
        fitnessApp.userView.render(user);
        return "Thanks for logging your session.";
    };

    var logSession = function () {
        var sessionDateString = getById("sessionDate").value;
        var sessionDate = Date.parse(sessionDateString);
        var sessionDuration = parseInt(getById("sessionDuration").value);
        fitnessApp.messageView.clear();
        if (!sessionDate) {
            fitnessApp.messageView.render("Wrong date");
            return;
        }
        if (!sessionDuration) {
            fitnessApp.messageView.render("Wrong duration. Should be an integer value");
            return;
        }
        log(sessionDateString,sessionDuration);
    };

    var init = function () {
      fitnessApp.userManager.loadUserList("users", function (userList) {
        if (userList === null || userList.length === 0) {
            return;
        }

        fitnessApp.userListView.render(userList);
        loadUser(userList[0]);

        var buttonLoadUser = document.getElementById("loadUser");
        buttonLoadUser.addEventListener("click", loadSelectedUser);

        var buttonLogSession = document.getElementById("logSession");
        buttonLogSession.addEventListener("click", logSession);
    });
      
      return {
        log: log,
        loadUser: loadUser
      };
    };
    
    if (window.fitnessApp === undefined) {
      window.fitnessApp = {};
    }
    
    fitnessApp.init = init;
    
  })();
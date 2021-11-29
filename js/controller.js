(function () {
  
    var buildUser = function (userData) {
      var user = new fitnessApp.User(userData.name);
    
      userData.sessions.forEach(function (session) {
        user.addSession(session.sessionDate, session.duration);
      });
    
      return user;
    };
    
    var init = function (userData) {
      var user = buildUser(userData);
      
      fitnessApp.userView.render(user);
      
      return {
        log: function (sessionDate, duration) {
          user.addSession(sessionDate, duration);
          fitnessApp.userView.render(user);
          return "Thanks for logging your session.";
        }
      };
    };
    
    if (window.fitnessApp === undefined) {
      window.fitnessApp = {};
    }
    
    fitnessApp.init = init;
    
  })();
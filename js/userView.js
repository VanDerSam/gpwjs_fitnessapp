/**
 * @module userView
 */
(function () {
    "use strict";

    // var getInfo = function (user) {
    //     var infoString = "\n" + user.name + "\n";

    //     user.sessions.forEach(function (session) {
    //         infoString += session.duration + " minutes on ";
    //         infoString += session.sessionDate + "\n";
    //     });

    //     infoString += "\n" + user.total + " minutes so far";
    //     infoString += "\nWell done!\n";

    //     return infoString;
    // };

    var render = function (user) {
        var userDiv = document.getElementById("user");
        var userData = user.getData();

        // Form the list of sessions
        var templateScript = document.getElementById("sessionTemplate");
        var templateString = templateScript.innerHTML;
        userDiv.innerHTML = gpwj.templates.fillList(templateString, userData.sessions);

        // Form the list of sessions
        var templateScript = document.getElementById("sessionsTotalTemplate");
        var templateString = templateScript.innerHTML;
        userDiv.innerHTML += gpwj.templates.fill(templateString, { totalMinutes : userData.total});
    };

    if (window.fitnessApp === undefined) {
        window.fitnessApp = {};
    }

    fitnessApp.userView = {
        render: render
    };
})();
/**
 * @module userView
 */
(function () {
    var getInfo = function (user) {
        var infoString = "\n" + user.name + "\n";

        user.sessions.forEach(function (session) {
            infoString += session.duration + " minutes on ";
            infoString += session.sessionDate + "\n";
        });

        infoString += "\n" + user.total + " minutes so far";
        infoString += "\nWell done!\n";

        return infoString;
    };

    var render = function (user) {
        console.log(getInfo(user.getData()));
    };

    if (window.fitnessApp === undefined) {
        window.fitnessApp = {};
    }

    fitnessApp.userView = {
        render: render
    };
})();
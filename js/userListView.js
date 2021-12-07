/**
 * @module userListView
 * Fills list of user on the screen
 */
(function () {
    "use strict";

    var usersDiv = document.getElementById("users");

    var getSelectElementInHTML = function (users) {
        var htmlCode = "";

        htmlCode = users.map(function (item) {
            return "<option>" + item + "</option>";
        }).join('');

        return htmlCode;
    };

    var render = function (users) {
        usersDiv.innerHTML = getSelectElementInHTML(users);
    };

    var getSelectedUser = function () {
        return usersDiv.value;
    };

    if (window.fitnessApp === undefined) {
        window.fitnessApp = {};
    }

    fitnessApp.userListView = {
        render: render,
        getSelectedUser: getSelectedUser
    };
})();
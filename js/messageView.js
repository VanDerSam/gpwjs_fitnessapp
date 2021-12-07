/**
 * @module messageView
 * A module for log errors 
 */
(function () {
    "use strict";

    var getMessageInfo = function (messageData) {
    return "*** " + messageData + " ***";
    };

    var render = function (message) {
        //console.error(getMessageInfo(message));
        var messageDiv = document.getElementById("messages");
        messageDiv.innerHTML = getMessageInfo(message);
    };

    function clear () {
        var messageDiv = document.getElementById("messages");
        messageDiv.innerHTML = "";
    }

    if (window.fitnessApp === undefined) {
        window.fitnessApp = {};
    }

    fitnessApp.messageView = {
        render: render,
        clear: clear
    };

    })();
/**
 * @module messageView
 * A module for log errors 
 */
(function () {
    var getMessageInfo = function (messageData) {
    return "*** " + messageData + " ***";
    };
    var render = function (message) {
    console.error(getMessageInfo(message));
    };
    if (window.fitnessApp === undefined) {
    window.fitnessApp = {};
    }
    fitnessApp.messageView = {
    render: render
    };
    })();
/**
 * @module userView
 * A module for loading data files (JSON)
 */

(function () {
    "use strict";

    function loadData(userId, callback) {
        var xhr = new XMLHttpRequest();
        var url = "http://localhost:5000/userData/" + userId + ".json";

        xhr.addEventListener("load", function () {
            var data = JSON.parse(xhr.responseText);
            callback(data);
        });

        xhr.open("GET", url);
        xhr.send();
    }

    if (window.gpwj === undefined) {
        window.gpwj = {};
    }

    gpwj.data = {
        load: loadData
    };

})();
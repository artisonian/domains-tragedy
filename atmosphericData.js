"use strict";

var EventEmitter = require("events").EventEmitter;

var dataSampler = new EventEmitter();

setInterval(function () {
    var dataGathered = Math.random(); // very rigorous

    console.log('about to emit', dataGathered);
    dataSampler.emit("newData", dataGathered);
}, 1000);

exports.getNextData = function (cb) {
    dataSampler.once("newData", cb);
};

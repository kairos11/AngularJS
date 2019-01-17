/// <reference path="angular.js" />
/* Drag & drop angular.js on the scripts forlder*/

/*Angular DI, can be done using Value, Constant, Servive, Factory, Provider */

/*DI - SERVICE*/
var app = angular.module("myApp", []);
app.service("myService", function () {
    this.doIt = function () {
        console.log("Done");
    };
});
app.controller("myController", function ($scope, myService) {
    myService.doIt();
});
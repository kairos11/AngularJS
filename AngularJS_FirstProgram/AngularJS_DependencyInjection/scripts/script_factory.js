/// <reference path="angular.js" />
/* Drag & drop angular.js on the scripts forlder*/

/*Angular DI, can be done using Value, Constant, Servive, Factory, Provider */

/*DI - FACTORY*/
var app = angular.module("myApp", []);

app.factory("myFactory", function (numberValue) {
    return "Value : " + numberValue;
});
app.controller("MyController", function ($scope, myFactory) {
    console.log(myFactory);
});
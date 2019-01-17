/// <reference path="angular.js" />
/* Drag & drop angular.js on the scripts forlder*/

/*Angular DI, can be done using Value, Constant, Servive, Factory, Provider */

/*DI - Provider*/

var app = app.module("myApp", []);

app.provider("serviceProvider", function () {
    var provider = {};

    provider.$get = function () {
        var service = {};

        service.doService = function () {
            console.log("Service Provider: Service Done!");
        };
        return service;
    };
    return provider;
});

app.controller("myController", function ($scope, serviceProvider) {
    $scope.task = function () {
        serviceProvider.doService();
    };
});
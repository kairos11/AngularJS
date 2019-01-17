/// <reference path="angular.js" />
/* Drag & drop angular.js on the scripts forlder*/

var mainApp = angular.module("mainApp", []);
mainApp.factory('MathService', function () {
    var factory = {}; /*This is an object; Can have multiple methods; Can create a number of objects inside the service; Or you can create single method */

    factory.multiply = function (a, b) {
        return a * b;
    };
    
    factory.add = function (a, b) {
        return a + b;
    };

    return factory;

});

mainApp.service('CalcService', function (MathService) {
    this.square = function (a) {
        return MathService.multiply(a, a);
    };

    this.sum = function (a,b) {
        return MathService.add(a, b);
    };
});

mainApp.controller('CalcController', function ($scope, CalcService) {
    $scope.square = function () {
        $scope.result = CalcService.square($scope.number);
    };
    $scope.sum = function () {
        $scope.result = CalcService.sum($scope.number, $scope.numberTwo);
    };
});
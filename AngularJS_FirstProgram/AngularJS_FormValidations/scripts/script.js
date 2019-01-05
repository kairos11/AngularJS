/// <reference path="angular.js" />
/* Drag & drop angular.js on the scripts forlder*/

var app = angular.module("myModule", []);

app.controller("formController", function ($scope) {
    $scope.reset = function () {
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.email = "";
    }
    $scope.submit = function () {
        alert("Ok");
    }

});
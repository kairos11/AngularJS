/// <reference path="../../angularjs_firstprogram/scripts/angular.js" /> 
/* Drag & drop angular.js on the scripts forlder*/

var app = angular.module("myModule", []);

app.controller("recordsController", function ($scope,$http) { /*$http is used to be able to perform "get" operation on the .json files*/
    var url = "data/records.json";
    $http.get(url).success(function (response) {
        $scope.employees = response;
    });
});
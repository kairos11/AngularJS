/// <reference path="../../angularjs_firstprogram/scripts/angular.js" /> 
/* Drag & drop angular.js on the scripts forlder*/

var app = angular.module("myModule", []);

app.controller("firstController", function ($scope) {
    $scope.message = "AngularJS Tutorial";
});

app.controller("dataController", function ($scope) {
    var listEmployees = [
        { firstName:"Juan",    lastName:"dela Cruz", gender:"Male", salary: 3700 },
        { firstName:"Juana",   lastName:"dela Cruz", gender:"Female", salary: 36000 },
        { firstName:"Julio",   lastName:"dela Cruz", gender:"Male", salary: 35000 },
        { firstName:"Julia",   lastName:"dela Cruz", gender:"Female", salary: 50000 },
        { firstName:"Juaning", lastName:"dela Cruz", gender:"Female", salary: 80000 }
    ];
    $scope.employees = listEmployees;
});
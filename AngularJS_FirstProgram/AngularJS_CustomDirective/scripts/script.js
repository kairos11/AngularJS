/// <reference path="angular.js" />
/* Drag & drop angular.js on the scripts forlder*/

var app = angular.module('mainApp', []);

app.directive('firstDirective', function () {
    function linkedFunction($scope, element, attributes) {
        $scope.text = "Hi there...";
        /*$scope.isActive = false;
        $scope.mouseover = function (isActive) {
            if (!isActive) {
                $scope.isActive = true;
            } else {
                $scope.isActive = false;
            }
        } */

        $scope.changeText = function (newText) {
            $scope.text = newText;
        };

        /*element.bind('click', function () {
            alert(element[0].innerHTML); 
        });*/
    }
    return {
        link: linkedFunction,
        template: '<span ng-click="changeText(\'Welcome to Tutorial\')">Current Text : {{ text }}</span>',
        /*template: <span ng-mouseover="mouseover(isActive)">Current Text : {{ text }}</span>,*/
        restrict: 'A'                              /*A - Attribute, E - Element, CSS Class, Comment */
    };
});

app.controller('myController', function () {

});


/// <reference path="angular.js" />
/* Drag & drop angular.js on the scripts forlder*/

var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'Templates/main.html', /* templateUrl is case sensitive */
            controller: 'mainController'
        }).
        when('/contacts', {
            templateUrl: 'Templates/contacts.html',
            controller: 'contactsController'
        }).
        otherwise({                             /* it will to otherwise when other selection was made */
            redirectTo: '/'
        });
}]);

mainApp.controller("mainController", function ($scope) {
    $scope.message = "Hello, Welcome to  AngularJS View";
});
mainApp.controller("contactsController", function ($scope) {
    $scope.message = "You can contact us at 123456";
});
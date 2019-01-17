/// <reference path="angular.js" />
/* Drag & drop angular.js on the scripts forlder*/

/*Angular DI, can be done using Value, Constant, Servive, Factory, Provider */

/*DI - VALUE*/
var app = angular.module("myApp", []);

app.value("numberValue", 999);
app.value("stringValue", "kng");
app.value("objectValue", { val1: 123, val2: "abc" });

app.controller("MyController", function ($scope, numberValue) {
    console.log(numberValue);
});


///*DI - CONSTANT*/
//app.constant("configValue", "Constant value, can be passed in config() function.");

//myservice.config(function (serviceProvider, configValue) {
//    serviceProvider.dbConfiguration(configValue);
//});
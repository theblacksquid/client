/**
 * AngularJS Routing
 * @author Regan Lawton <reganlawton92@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = window.angular.module('mainApp', [
    'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // Home
        .when("/", {templateUrl: "views/home.html", controller: "homeCtrl"})
        .when("/buy", {templateUrl: "views/buy/index.html", controller: "buyCtrl"})
        .when("/sell", {templateUrl: "views/sell/index.html", controller: "sellCtrl"})
        .when("/tools", {templateUrl: "views/tools/index.html", controller: "toolsCtrl"})
        .when("/settings", {templateUrl: "views/settings/index.html", controller: "settingsCtrl"})
        // Show 404
        .otherwise("/404", {templateUrl: "views/_404.html", controller: "errorCtrl"});
}]);

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
        .when("/settings", {templateUrl: "views/sett    ings.html", controller: "settingsCtrl"})
        // Show 404
        .otherwise("/404", {templateUrl: "views/_404.html", controller: "errorCtrl"});
}]);

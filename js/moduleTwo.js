/**
 * on Angular Module Structure
 *
 * ModuleName
 * - Config -> Routes
 * - Filters
 * - Directives
 * - Controllers
 * - Classes
 *   - Factory
 *   - Service
 *   - Provide
 *   - Value
 *
 */

// Create a module
var moduleTwo = angular.module('moduleTwo',['ngRoute']); // ['ngAnimate','ui.bootstrap','js.jquery'] <- Dependency injectors

// Config and Routes
moduleTwo.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/',{ // Route URL
                controller: 'NamesController', // What Controller
                templateUrl: 'js/moduleTwoViews/view1.html',  // What Template
            })
            .when('/names',{
                controller: 'NamesController',
                templateUrl: 'js/moduleTwoViews/view2.html',
            })
            .otherwise({
                redirectTo: '/',
            })
    }
]);

// Controller(s)
moduleTwo.controller('NamesController',['$scope',
    function($scope) {
        $scope.names = [
            { name:'Arwin', city:'Pasig' },
            { name:'Lara', city:'Kapitolyo' },
            { name:'Ariane', city:'Fairview' }
        ];
    }
]);
/*
# if Large Scale (see notes.txt)
moduleTwo.controller(Controllers);

*/

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
var moduleThree = angular.module('moduleThree',[]); // ['ngAnimate','ui.bootstrap','js.jquery'] <- Dependency injectors

// Controller(s)
moduleThree.controller('NamesController',['$scope','NamesFactory', // Injector helpers and constants
    function($scope,NamesFactory) {
        $scope.names = NamesFactory.getNames()
    }
]);
/*
# if Large Scale (see notes.txt)
moduleTwo.controller(Controllers);

*/


/*
 * Factory basically is a stand alone class that you can use inside the module once injected to the module
 *
 */
// Factory
//moduleThree.factory('NamesFactory',['$http', // Injector helpers and constants
moduleThree.factory('NamesFactory',
    function() {
        var names = [
            { name:'Arwin', city:'Pasig' },
            { name:'Lara', city:'Kapitolyo' },
            { name:'Ariane', city:'Fairview' }
        ];

        var factory = {};
        factory.getNames = function() {
            return names;
        };
        factory.pushToNames = function($data) {
            alert($data);
        };

        return factory;
    }
);

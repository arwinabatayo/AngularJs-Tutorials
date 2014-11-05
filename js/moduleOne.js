var moduleOne = angular.module('moduleOne',[]);

moduleOne.controller('NamesController',function($scope) {
    $scope.names = [
        {name:'Arwin', city:'Pasig'},
        {name:'Lara', city:'Kapitolyo'},
        {name:'Ariane', city:'Fairview'}
    ];
});

var Controllers = {}

Controllers.BaseController = function($scope) {
    $scope.globals = [
        { name:'Arwin', city:'Pasig' },
        { name:'Lara', city:'Kapitolyo' },
        { name:'Ariane', city:'Fairview' }
    ]
}

Controllers.AuthController = function($scope) {
    $scope.auth = [
        { name:'Arwin', city:'Pasig' },
        { name:'Lara', city:'Kapitolyo' },
        { name:'Ariane', city:'Fairview' }
    ]
}

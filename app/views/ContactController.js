app.controller('ContactController', ['$scope', '$routeParams', 'contactsService', '$timeout', function($scope, $routeParams, contactsService, $timeout) {
    $scope.contact = contactsService.findByID($routeParams.id);
    $scope.$on('saved', function() {
        $timeout(function() {
            $scope.contact.$update();
        }, 0);
    });
}]);

app.controller('AddController', ['$scope', 'contactsService', '$alert', function($scope, contactsService, $alert) {
    $scope.submit = function() {
        $scope.contact.$save();
        $scope.contact = contactsService.create();
        alert.show();
    };

    var alert = $alert({
        title: 'Sukces!',
        content: 'Kontakt został pomyślnie dodany.',
        type: 'success',
        container: '#alertContainer',
        show: false
    });
}]);

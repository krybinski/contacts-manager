app.controller('IndexController', ['$scope', 'contactsService', '$alert', function($scope, contactsService, $alert) {
    $scope.contacts = contactsService.get();

    $scope.delete = function(index) {
        contactsService.remove($scope.contact[index].id);
        $scope.contacts.splice(index, 1);
        alert.show();
    };

    var alert = $alert({
        title: 'Sukces!',
        content: 'Kontakt został pomyślnie usunięty',
        type: 'success',
        container: '#alertContainer',
        show: false
    });
}]);

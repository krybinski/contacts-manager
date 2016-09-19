angular.module('contactsMgr').config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'IndexController',
        templateUrl: '../views/index.html'
    })
    .when('/add-contact', {
        controller: 'AddController',
        templateUrl: '../views/add.html'
    })
    .when('/contact/:id', {
        controller: 'ContactController',
        templateUrl: '../views/contact.html'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);

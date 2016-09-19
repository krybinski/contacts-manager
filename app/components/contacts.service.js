app.factory('contactsService', ['$resource', function contactsService($resource) {

    var Resource = $resource('http://jsonplaceholder.typicode.com/users/:id', {id: '@id'}, {
        update: {method: 'PUT'}
    });

    return {
        get: function() {
            return Resource.query();
        },
        findByID: function(id) {
            return Resource.get({id: id});
        },
        create: function() {
            return new Resource();
        },
        remove: function(id) {
            Resource.delete({id: id});
        }
    };
    
}]);

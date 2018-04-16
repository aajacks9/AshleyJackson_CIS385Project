angular.module('AshleyJackson_CIS385ProjectApp',[]);

var itemListCtrl = function ($scope) {
    $scope.data = {
        items: [{
            name: 'Nemo',
            rating: 3,
            genre: 'Children'
            _id:'5370a35f2536f6785f8dfb6a'
        },{
            name: 'Space Jam',
            rating: 5,
            genre: 'Cartoon'
            _id:'5370a35f2536f6785f8dfb6a'

        },{
            name:'Get Out',
            rating: 5,
            genre: 'Thriller'
            _id:'5370a35f2536f6785f8dfb6a'

        },{
            name:'Meet the Fockers',
            rating:4,
            genre:'Comedy'
            _id:'5370a35f2536f6785f8dfb6a'
        }]
    };
};

angular
    .module('AshleyJackson_CIS385ProjectApp')
    .controller('itemsListCtrl',itemsListCtrl)
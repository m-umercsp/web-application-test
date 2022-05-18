(function () {
    'use strict';


     app.controller('controllerChild', controller);

    controller.$inject = ['$rootScope','$scope'];

    function controller($rootScope,$scope) {
        $scope.childtitle = 'Child I am inside parent';
        $scope.MessageFromParent = '';
        $scope.MyList = [];
        $scope.MyDummyList = [
            { id: 1, name: 'Bobby' },
            { id: 22, name: 'Peter' },
            { id: 33, name: 'James' },
            { id: 44, name: 'Harry' },

        ]

        $rootScope.$on('CallingFromFactory', function (event, args) {
            $scope.MessageFromParent = args;
        });

        activate();

        function activate() { }

        $scope.ShowList = () => {
            
            var newobject = angular.copy($scope.MyDummyList);
            $scope.MyList = JSLINQ(newobject).Where(ab=>ab.id!==22).items;
            $scope.$applyAsync();
        }
    }
})();

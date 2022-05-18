(function () {
    'use strict';


     app.controller('controllerParent', controller);

    controller.$inject = ['$scope', '$window','Myfactory'];

    function controller($scope, $window, Myfactory) {
        $scope.title = 'controller Parent';
        $scope.Tesdata = '';
        $scope.TesdataJavascript = '';
        
        activate();

        function activate() {

            $scope.Tesdata = $window.testdata
            $scope.TesdataJavascript = HelloFromJavascript();
            
        }
        
        $scope.SayGoodbyChild = () => {
            Myfactory("Say good bye child");

        }
    }
})();

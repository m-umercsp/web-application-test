(function () {
    'use strict';

    app.factory('Myfactory', Myfactory);

    Myfactory.$inject = ['$http','$rootScope'];

    function Myfactory($http, $rootScope) {

        return function (Text) {
            //alert("Factory is called")

            $rootScope.$broadcast("CallingFromFactory", Text);
        }
      
    }
})();
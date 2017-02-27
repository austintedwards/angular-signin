(function() {

    'use strict';

    angular.module('app', [])
        .component('content', {
            templateUrl: '/views/content.html',
            controller: controller
        })

    controller.$inject = ['$http'];

    function controller($http) {
        const dat = this

        dat.$onInit = onInit;

        function onInit() {
          const dat = this
        }


    }

}());

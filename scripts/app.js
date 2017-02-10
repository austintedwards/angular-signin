(function() {

    'use strict';

    angular.module('app', [])
        .component('accidentally', {
            templateUrl: '/views/content.html',
            controller: controller
        })
        .component('navbar', {
            templateUrl: '/views/nav.html',
            controller: controllernav
        }).component('footerbar', {
            templateUrl: '/views/footer.html',
            controller: controllerfooter
        })

        function controllerfooter($http) {
            const dat = this

            // dat.$onInit = onInit;
            //
            // function onInit() {
            //   const dat = this
            //   // grabGifs()
            // }

        }

    controller.$inject = ['$http'];
    function controllernav($http) {
        const dat = this

        // dat.$onInit = onInit;
        //
        // function onInit() {
        //   const dat = this
        //   // grabGifs()
        // }

    }

    function controller($http) {
        const dat = this

        dat.$onInit = onInit;
        dat.searchSubmit = searchSubmit;
        dat.grabGifs = grabGifs;
        dat.clickDelete = clickDelete;

        function onInit() {
          const dat = this
          // grabGifs()
        }


        function searchSubmit(){
          grabGifs(dat.searchTerm)
        }

        function grabGifs(searchterm) {
          delete dat.gifs
          dat.gifs = []
          $http.get('http://api.giphy.com/v1/gifs/search?q='+ searchterm + '&limit=100&api_key=dc6zaTOxFJmzC')
           .then(function (res) {
             for (var i = 0; i < 100; i++) {
               dat.gifs.push(res.data.data[i].images.fixed_height.url)
             }
             console.log(dat.gifs);
             });
           }

           function clickDelete(gif){
             dat.gifs.splice(dat.gifs.indexOf(gif), 1);

           }


    }
}());

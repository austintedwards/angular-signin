(function() {

    'use strict';

    angular.module('app', [])
        .component('accidentally', {
            templateUrl: '/views/content.html',
            controller: controller
        });

    controller.$inject = ['$http'];

    function controller($http) {
        const dat = this
        // dat.newPost = newPost;
        dat.$onInit = onInit;
        dat.searchSubmit = searchSubmit;
        dat.grabGifs = grabGifs;

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
          $http.get('http://api.giphy.com/v1/gifs/search?q='+ searchterm + '&api_key=dc6zaTOxFJmzC')
           .then(function (res) {
             for (var i = 0; i < 25; i++) {
               dat.gifs.push(res.data.data[i].images.fixed_height.url)
             }
             console.log(dat.gifs);
             });
           }


    }
}());

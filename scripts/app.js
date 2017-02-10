(function() {

    'use strict';

    angular.module('app', [])
        .component('repost', {
            templateUrl: '/scripts/content.html',
            controller: controller
        });

    controller.$inject = ['$http'];

    function controller($http) {
        const dat = this
        // dat.newPost = newPost;
        dat.$onInit = grabGifs;



        function grabGifs() {
          var gifs =[];
          $http.get('http://api.giphy.com/v1/gifs/search?q=fart&api_key=dc6zaTOxFJmzC')
           .then(function (res) {
             for (var i = 0; i < 25; i++) {
               gifs.push(res.data.data[i].images.fixed_height.url)
             }
             console.log(gifs)
             dat.gifs=gifs
             });
           }


    }
}());

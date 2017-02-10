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
        dat.clickDelete = clickDelete



        function grabGifs() {
          var gifs =[];
          $http.get('http://api.giphy.com/v1/gifs/search?q=dance&limit=100&api_key=dc6zaTOxFJmzC')
           .then(function (res) {
             for (var i = 0; i < 100; i++) {
               gifs.push(res.data.data[i].images.fixed_height.url)
             }
             dat.gifs=gifs
             });
           }

           function clickDelete(gif){
             dat.gifs.splice(dat.gifs.indexOf(gif), 1);

           }


    }
}());

(function() {

    'use strict';

    angular.module('app', [])
        .component('accidentally', {
            templateUrl: '/views/content.html',
            controller: controller
        });

    function controller() {
        const dat = this
        dat.newPost = newPost;
        dat.$onInit = exisitingPosts;



        function exisitingPosts() {
            // dat.posts =
        }


    }
}());

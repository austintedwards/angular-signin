(function() {

    'use strict';

    angular.module('app', [])
        .component('repost', {
            templateUrl: '/scripts/content.html',
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

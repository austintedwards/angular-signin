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
        dat.createPost = createPost;
        dat.voteUp = voteUp;
        dat.voteDown = voteDown;
        dat.commentPost = commentPost;


        function newPost() {
            dat.makePost = !dat.makePost;
        }

        function exisitingPosts() {
            dat.posts = [{
                    title: "hey",
                    author: "austin",
                    image: "http://68.media.tumblr.com/bb3900cf9fb7a404d002cd5336ca44b9/tumblr_mhkd1nctcn1rab1jyo1_500.gif",
                    votes: 4,
                    body: "this is a test post and you will see",
                    time: new Date(2017, 2, 8),
                    comments:[]
                },
                {
                    title: "you",
                    author: "edwards",
                    image: "https://media.giphy.com/media/l4q8gzOgUQIy7Ml44/giphy.gif",
                    votes: 6,
                    body: "and will be added ",
                    time: new Date(2017, 1, 8),
                    comments:["You should read this.","this is very important"]
                },
                {
                    title: "sup",
                    author: "thomas",
                    image: "https://media.giphy.com/media/l0MYQijO8WG0j0kBa/giphy.gif",
                    votes: 2,
                    body: "and should make sense ",
                    time: new Date(2016, 1, 5),
                    comments:["this is a great blog"]
                }
            ];
        }

        function createPost() {
            dat.post.time = new Date();
            dat.post.votes = 0;
            dat.post.comments=[];
            dat.posts.push(dat.post);
            dat.newPost();
            delete dat.post;
        }

        function voteUp(post) {
            console.log("vote up", post)
            post.votes++
        }

        function voteDown(post) {
            if (post.votes > 0) {
                post.votes--
            }
        }

        function commentPost(post){
          post.comments.push(post.text);
          delete post.text;
        }

    }
}());

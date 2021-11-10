const {Post} = require("../models");

const postData = [
    {
        title: "Post1",
        content: "This is a post on this blog.",
        user_id: 1
    },
    {
        title: "Post2",
        content: "This is another post on this blog.",
        user_id: 5
    },
    {
        title: "Post3",
        content: "Again, this is a post on this blog.",
        user_id: 3
    },
    {
        title: "Post4",
        content: "Ah yes, another post on this blog.",
        user_id: 7
    },
    {
        title: "Post5",
        content: "This is the fifth post on this blog.",
        user_id: 1
    },
    {
        title: "Post6",
        content: "The posts continue on this blog.",
        user_id: 2
    },
    {
        title: "Post7",
        content: "How many posts are on this blog?",
        user_id: 4
    },
    {
        title: "Post8",
        content: "There's so many posts on this blog!",
        user_id: 8
    },
    {
        title: "Post9",
        content: "Is this the last post on this blog?",
        user_id: 6
    },
    {
        title: "Post10",
        content: "No, this is the last post on this blog.",
        user_id: 7
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
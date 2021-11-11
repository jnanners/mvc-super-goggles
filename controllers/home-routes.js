const router = require("express").Router();
const {User, Post, Comment} = require("../models");

//get all posts and render with homepage template
router.get("/", (req, res) => {
    //same logic to get all posts
    Post.findAll({
        include: [
            {
                model: User,
                attributes: ["username"]
            },
            {
                model: Comment,
                attributes: ["id", "comment_text", "user_id", "post_id", "created_at"],
                include: {
                    model: User,
                    attributes: ["username"]
                }
            }
        ]
    })
    .then(dbPostData => {
        //serialize post data
        const posts = dbPostData.map(post => post.get({plain: true}));

        //render the posts with homepage template
        res.render("homepage", {
            posts
            //loggedIn: req.session.loggedIn will go here
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

//router.get for login


//get one post and render with homepage template
router.get("/post/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ["username"]
            },
            {
                model: Comment,
                attributes: ["id", "comment_text", "user_id", "post_id", "created_at"],
                include: {
                    model: User,
                    attributes: ["username"]
                }
            }
        ]
    })
    .then(dbPostData => {
        if(!dbPostData){
            res.status(404).json({message: "No post found with this id"});
            return;
        }
        //serialize data
        const post = dbPostData.get({plain: true});

        //pass data to template
        res.render("single-post", {
            post
            //loggedIn: req.session.loggedIn will go here
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

module.exports = router;
const router = require("express").Router();
const {User, Post, Comment} = require("../../models");
//session authentication

//get all posts 
router.get("/", (req, res) => {
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

//get one post
router.get("/:id", (req, res) => {
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
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

//create a post (needs session auth)


//update a post (needs session auth)


//delete a post (needs session auth)

module.exports = router;
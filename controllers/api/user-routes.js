const router = require("express").Router();
const {User, Post, Comment} = require("../../models");
//login authentication will go here

//get all users
router.get("/", (req, res) => {
    User.findAll({
        attributes: {exclude: ["password"]}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

//get one user
router.get("/:id", (req, res) => {
    User.findOne({
        attributes: {exclude: ["password"]},
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ["id", "title", "content", "created_at"]
            },
            {
                model: Comment,
                attributes: ["id", "comment_text", "created_at"],
                include: {
                    model: Post,
                    attributes: ["title"]
                }
            }
        ]
    })
    .then(dbUserData => {
        if(!dbUserData){
            res.status(400).json({message: "No user found with this id"});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
})

//create a user (need session auth)


//login (need session auth)


//logout (need session auth)


//update user info (need session auth)


//delete user (need session auth)


module.exports = router;
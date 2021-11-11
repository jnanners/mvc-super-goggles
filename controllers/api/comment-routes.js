const router = require("express").Router();
const {Comment} = require("../../models");
//session auth

//get all comments
router.get("/", (req, res) => {
    Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

//create a comment(requires session auth)


//delete a comment(requires session auth)


module.exports = router;
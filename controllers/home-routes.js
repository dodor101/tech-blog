const router = require("express").Router();
const { Post, User, Comment } = require("../models");
//const withAuth = require('../utils/auth');

// get all posts for homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      logged_in: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("singlePost", {
      post,
      logged_in: req.session.loggedIn,
    });
    console.log("🚀 ~ file: home-routes.js:54 ~ router.get ~ post:", post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// login route
router.get("/login", (req, res) => {
  console.log("LOGIN");
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;

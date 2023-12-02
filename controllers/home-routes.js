const router = require('express').Router();
const { Post, User, Comment  } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [['id', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        // {
        //   model: Like,
        //   attributes: ['id', 'like', 'post_id', 'user_id', 'created_at'],
        // },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      logged_in: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//// Comments post controllers

// router.post('/like', withAuth, async (req, res) => {
//   try {
//     const getLike = await Like.findAll({});
//     const likes = getLike.map((post) => post.get({ plain: true }));

//     console.log(likes);
//     const newLike = {
//       like: req.body.like,
//       post_id: req.body.post_id,
//       // use the id from the session
//       user_id: req.session.user_id,
//     };

//     const createLike = await Like.create(newLike);

//     res.status(200).json(createLike);
//   } catch (error) {
//     res.status(400).json({ errorMessage: error.message });
//   }
// });

// get single post
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        // {
        //   model: Like,
        // },
      ],
    });

    const post = postData.get({ plain: true });
    res.render('singlePost', {
      post,
      logged_in: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('dashboard', {
      posts,
      logged_in: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/add', withAuth, (req, res) => {
  res.render('add', { logged_in: req.session.logged_in });
});
router.get('/edit', withAuth, (req, res) => {
  res.render('edit', { logged_in: req.session.logged_in });
});

// login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
// git post by id
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: ['id', 'title', 'post_content'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('edit-post', {
        post,
        loggedIn: true,
      });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

module.exports = router;

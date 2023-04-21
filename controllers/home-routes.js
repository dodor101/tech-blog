const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
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

// get single post
router.get('/post/:id', async (req, res) => {
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
      ],
    });

    const post = postData.get({ plain: true });

    res.render('singlePost', {
      post,
      logged_in: req.session.loggedIn,
    });
    console.log('🚀 ~ file: home-routes.js:54 ~ router.get ~ post:', post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', { logged_in: req.session.loggedIn });
});

router.get('/add', (req, res) => {
  res.render('add', { logged_in: req.session.loggedIn });
});

// Add a post
router.post('/post', async (req, res) => {
  try {
    const addPost = await Post.create(req.body, {
      user_id: req.session.user_id,
    });
    console.log('🚀 ~ file: home-routes.js:76 ~ router.post ~ addPost:', addPost);
    res.status(200).json(addPost);
  } catch (error) {
    res.status(400).json(error);
  }
});

// login route
router.get('/login', (req, res) => {
  console.log('LOGIN');
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

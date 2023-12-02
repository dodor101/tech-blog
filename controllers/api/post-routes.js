const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Add a post
router.post('/', withAuth, async (req, res) => {
  try {
    console.log('Session Info');
    const addPost = await Post.create({
      title: req.body.title,
      post_content: req.body.post_content,
      user_id: req.session.user_id,
    });
    res.redirect('/');
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updateData = await Post.update(
      {
        title: req.body.title,
        post_content: req.body.post_content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!updateData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(updateData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    

    if (!deletePost) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json('Deleted Successfully');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const createComment = await Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      // use the id from the session
      user_id: req.session.user_id,
    });

    res.status(200).json(createComment);
  } catch (error) {
    res.status(400).json({ errorMessage: error.message });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deleteComment = await Comment.destroy({
      where: {
        id: req.params.id,
        post_id: req.body.post_id,
        // use the id from the session
        user_id: req.session.user_id,
      },
    });

    res.status(200).json(deleteComment);
  } catch (error) {
    res.status(400).json({ errorMessage: error.message });
  }
});

module.exports = router;

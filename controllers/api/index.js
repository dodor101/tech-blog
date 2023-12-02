const router = require('express').Router();

const userRouter = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRouter);

module.exports = router;

import asyncHandler from 'express-async-handler';
import Topic from '../models/topic.js';
import Post from '../models/post.js';

// @desc    Get a list of posts within a topic
// @route   GET /api/forum/topics/:topicId
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const { topicId } = req.params;

  const topic = await Topic.findById(topicId);
  const posts = await Post.find({ topic: topicId }).populate('user', 'name');

  if (posts) {
    res.json({
      title: topic.title,
      desc: topic.desc,
      posts: [...posts],
    });
  } else {
    res.status(404);
    throw new Error('Posts not found');
  }
});

// @desc    Add a post within a topic
// @route   POST /api/forum/topics/:topicId
// @access  Private
const addPost = asyncHandler(async (req, res) => {
  const { topicId } = req.params;
  const { content } = req.body;
  const { _id } = req.user;

  const post = await Post.create({
    topic: topicId,
    content,
    user: _id,
  });

  if (post) {
    res.json(post);
  } else {
    res.status(400);
    throw new Error('Invalid data');
  }
});

// @desc    Update a post
// @route   PUT /api/forum/posts/:postId
// @access  Private
const updatePost = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  const { isAdmin, _id } = req.user;
  const { content } = req.body;

  const post = await Post.findById(postId);

  if (post) {
    // Check if the user is admin or the owner of the post
    if (isAdmin !== true && !post.user.equals(_id)) {
      res.status(401);
      throw new Error('Unauthorized');
    }

    post.content = content || post.content;

    const updatedPost = await post.save();

    if (updatedPost) {
      res.json(updatedPost);
    } else {
      res.status(400);
      throw new Error('Invalid content');
    }
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

// @desc    Delete a post
// @route   DELETE /api/forum/posts/:postId
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  const { isAdmin, _id } = req.user;

  const post = await Post.findById(postId);

  if (post) {
    if (isAdmin !== true && !post.user.equals(_id)) {
      res.status(401);
      throw new Error('Unauthorized');
    }

    const deletedPost = await Post.findOneAndDelete({ _id: postId });

    res.json(deletedPost);
  } else {
    res.status(404);
    throw new Error('Post not found');
  }

  // Check if the user is the owner of the post
});

export { getPosts, addPost, updatePost, deletePost };

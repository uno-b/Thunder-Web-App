import asyncHandler from 'express-async-handler';
import Subject from '../models/subject.js';
import Topic from '../models/topic.js';

// @desc    Get a list of topics within a subject
// @route   GET /api/forum/subjects/:subjectId
// @access  Public
const getTopics = asyncHandler(async (req, res) => {
  const { subjectId } = req.params;

  const subject = await Subject.findById(subjectId);
  const topics = await Topic.find({ subject: subjectId }).populate(
    'user',
    'name'
  );

  if (topics) {
    res.json({
      title: subject.title,
      desc: subject.desc,
      topics: [...topics],
    });
  } else {
    res.status(404);
    throw new Error('Topics not found');
  }
});

// @desc    Add a topic to a subject
// @route   POST /api/forum/subjects/:subjectId
// @access  Private
const addTopic = asyncHandler(async (req, res) => {
  const { subjectId } = req.params;
  const { title, desc } = req.body;
  const { _id } = req.user;

  const topic = await Topic.create({
    title,
    desc,
    subject: subjectId,
    user: _id,
  });

  if (topic) {
    res.json(topic);
  } else {
    res.status(400);
    throw new Error('Invalid data');
  }
});

// @desc    Update a topic within a subject
// @route   PUT /api/forum/topics/:topicId
// @access  Private
const updateTopic = asyncHandler(async (req, res) => {
  const { topicId } = req.params;
  const { title, desc } = req.body;

  const topic = await Topic.findById(topicId);

  if (topic) {
    // Check if the user is admin or the owner of the post
    if (req.user.isAdmin !== true && !topic.user.equals(req.user._id)) {
      res.status(401);
      throw new Error('Unauthorized');
    }

    topic.title = title || topic.title;
    topic.desc = desc || topic.desc;

    const updatedTopic = await topic.save();

    if (updatedTopic) {
      res.json(updatedTopic);
    } else {
      res.status(400);
      throw new Error('Invalid data');
    }
  } else {
    res.status(404);
    throw new Error('Topic not found');
  }
});

// @desc    Delete a topic
// @route   DELETE /api/forum/topics/:topicId
// @access  Private
const deleteTopic = asyncHandler(async (req, res) => {
  const { topicId } = req.params;
  const { isAdmin, _id } = req.user;

  const topic = await Topic.findById(topicId);

  if (topic) {
    if (isAdmin !== true && !topic.user.equals(_id)) {
      res.status(401);
      throw new Error('Unauthorized');
    }

    const deletedTopic = await Topic.findOneAndDelete({ _id: topicId });

    res.json(deletedTopic);
  } else {
    res.status(404);
    throw new Error('Topic not found');
  }
});

export { getTopics, addTopic, updateTopic, deleteTopic };

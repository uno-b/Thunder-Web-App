import assert from 'assert';

import Subject from '../models/subject.js';
import Topic from '../models/topic.js';
import Post from '../models/post.js';
import User from '../models/user.js';

describe('Saving records', function () {
  let user;

  // Find a test user
  before(async () => {
    user = await User.findOne({ email: 'test@test.com' });
  });

  // Tests

  it('Save a subject to the database', async () => {
    const subject = new Subject({
      title: 'General',
      desc: 'For talking about things in general',
    });

    await subject.save();
    assert(subject.isNew === false);
  });

  it('Save a topic to the database', async () => {
    const subject = await Subject.findOne({ title: 'General' });

    const topic = new Topic({
      title: 'How to live life?',
      desc: 'Hi, I have just wanted to talk about my life',
      subject: subject._id,
      user: user._id,
    });

    await topic.save();

    subject.topics.push(topic);
    await subject.save();

    assert(topic.isNew === false);
  });

  it('Save a post to the database', async () => {
    const topic = await Topic.findOne({ title: 'How to live life?' });

    const post = new Post({
      topic: topic._id,
      content: 'So you might want to improve yourself...',
      user: user._id,
    });

    await post.save();

    topic.posts.push(post);
    await topic.save();

    assert(post.isNew === false);
  });
});

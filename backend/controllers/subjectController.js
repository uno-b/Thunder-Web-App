import asyncHandler from 'express-async-handler';
import Subject from '../models/subject.js';

// @desc    Get a list of subjects
// @route   GET /api/forum/subjects
// @access  Public
const getSubjects = asyncHandler(async (req, res) => {
  const subjects = await Subject.find({});

  if (subjects) {
    res.json(subjects);
  } else {
    res.status(404);
    throw new Error('No subject found.');
  }
});

// @desc    Add a subject
// @route   POST /api/forum/subjects
// @access  Private
const addSubject = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(401);
    throw new Error('The user is not an admin');
  }

  const title = req.body.title;
  const desc = req.body.desc || '';

  const subject = await Subject.create({
    title,
    desc,
  });

  if (subject) {
    res.json(subject);
  } else {
    res.status(404);
    throw new Error('Invalid subject data.');
  }
});

// @desc    Update a subject
// @route   PUT /api/forum/subjects/:subjectId
// @access  Private
const updateSubject = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(401);
    throw new Error('The user is not an admin');
  }

  const { subjectId } = req.params;
  const subject = await Subject.findById(subjectId);

  if (subject) {
    subject.title = req.body.title || subject.title;
    subject.desc = req.body.desc || subject.desc;

    const updatedSubject = await subject.save();

    res.json(updatedSubject);
  } else {
    res.status(404);
    throw new Error('Subject not found');
  }
});

// @desc    Delete a subject
// @route   DELETE /api/forum/subjects/:subjectId
// @access  Private
const deleteSubject = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(401);
    throw new Error('The user is not an admin');
  }

  const { subjectId } = req.params;
  const subject = await Subject.findOneAndDelete({ _id: subjectId });

  if (subject) {
    res.json(subject);
  } else {
    res.status(404);
    throw new Error('Delete error');
  }
});

export { getSubjects, addSubject, updateSubject, deleteSubject };

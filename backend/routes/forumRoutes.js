import express from 'express';
const router = express.Router();
import {
  getSubjects,
  addSubject,
  updateSubject,
  deleteSubject,
} from '../controllers/subjectController.js';
import {
  getTopics,
  addTopic,
  updateTopic,
  deleteTopic,
} from '../controllers/topicController.js';
import {
  getPosts,
  addPost,
  updatePost,
  deletePost,
} from '../controllers/postController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/subjects').get(getSubjects).post(protect, addSubject);
router
  .route('/subjects/:subjectId')
  .get(getTopics)
  .put(protect, updateSubject)
  .delete(protect, deleteSubject)
  .post(protect, addTopic);
router
  .route('/topics/:topicId')
  .get(getPosts)
  .put(protect, updateTopic)
  .delete(protect, deleteTopic)
  .post(protect, addPost);
router
  .route('/posts/:postId')
  .put(protect, updatePost)
  .delete(protect, deletePost);

export default router;

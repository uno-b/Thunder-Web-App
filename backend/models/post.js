import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    topic: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Topic',
    },
    content: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', PostSchema);

export default Post;

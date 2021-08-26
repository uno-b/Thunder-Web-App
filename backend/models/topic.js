import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TopicSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: String,
    subject: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  },
  {
    timestamps: true,
  }
);

TopicSchema.virtual('postCount').get(function () {
  return this.posts.length;
});

const Topic = mongoose.model('Topic', TopicSchema);

export default Topic;

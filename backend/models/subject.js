import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: String,
  topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }],
});

SubjectSchema.virtual('topicCount').get(function () {
  return this.topics.length;
});

const Subject = mongoose.model('Subject', SubjectSchema);

export default Subject;

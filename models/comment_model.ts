import { Schema, model, Document } from 'mongoose';

const replySchema = new Schema({
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

interface IComment extends Document {
  comment: string;
  createdAt: Date;
  user: Schema.Types.ObjectId;
  post: Schema.Types.ObjectId;
  replies: {
    comment: string;
    createdAt: Date;
    user: Schema.Types.ObjectId;
  }[];
}

const commentSchema = new Schema<IComment>({
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  replies: [replySchema],
});

const CommentModel = model<IComment>('Comment', commentSchema);
export default CommentModel;

import { Schema, model, Document } from 'mongoose';
import { IUser } from './user_model';

interface IPost extends Document {
  image: string;
  content: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  user: IUser;
  votes: {
    upvotes: Schema.Types.ObjectId[];
    downvotes: Schema.Types.ObjectId[];
  };
  comments: Schema.Types.ObjectId[];
  viewCount: number;
}

const postSchema = new Schema<IPost>({
  image: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, enum: ["Kidney", "Headache", "Stomachache","Leg pain", "Malaria"], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  votes: {
    upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  viewCount: { type: Number, default: 0 }
});

const PostModel = model<IPost>('Post', postSchema);
export default PostModel;

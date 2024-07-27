import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  posts: Schema.Types.ObjectId[]
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String, required: false },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

const UserModel = model<IUser>('User', userSchema);
export default UserModel;

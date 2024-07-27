import { Request, Response } from 'express';
import PostModel from '../../models/post_model';
import UserModel from '../../models/user_model';
import { IUser } from '../../models/user_model';
import { ObjectId } from 'mongoose';

interface PostRequest extends Request {
  user?: IUser;
}

const handleCreatePost = async (req: PostRequest, res: Response) => {
  try {
    const { image, content, category } = req.body;
    const user = req.user;

    if (!image || !content || !category) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!user || !user._id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = user._id as ObjectId;

    const newPost = new PostModel({
      image,
      content,
      category,
      user: userId,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    await newPost.save();

    const foundUser = await UserModel.findById(userId);

    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const newPostId = newPost._id as ObjectId;

    foundUser.posts.push(newPostId);
    await foundUser.save();

    return res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { handleCreatePost };

import { Request, Response } from 'express';
import PostModel from '../../../models/post_model';

const handleGetPostsByTime = async (req: Request, res: Response) => {
  try {
    const posts = await PostModel.find()
      .populate('user', 'username profilePicture')
      .sort({ createdAt: -1 });

    return res.status(200).json({ posts });
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { handleGetPostsByTime };

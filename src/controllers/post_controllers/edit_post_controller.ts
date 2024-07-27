import { Request, Response } from 'express';
import PostModel from '../../models/post_model';

interface EditPostRequest extends Request {
  user?: any;
}

const handleEditPost = async (req: EditPostRequest, res: Response) => {
  try {
    const postId = req.params.id;
    const { image, content, category } = req.body;

    const updatedPost = await PostModel.findByIdAndUpdate(
      postId,
      { image, content, category, updatedAt: new Date() },
      { new: true }
    ).populate('user', 'username profilePicture').exec();

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.status(200).json({
      updatedPost
    });
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { handleEditPost };

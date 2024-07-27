import { Request, Response } from 'express';
import PostModel from '../../../models/post_model';

const handleGetSinglePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;

    const post = await PostModel.findById(postId)
      .populate('user', 'username profilePicture')
      .exec();

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    post.viewCount += 1;

    await post.save();

    return res.status(200).json({
      post
    });
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { handleGetSinglePost };

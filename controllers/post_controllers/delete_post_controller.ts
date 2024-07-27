import { Request, Response } from 'express';
import PostModel from '../../models/post_model';

interface DeletePostRequest extends Request {
  user?: any;
}

const handleDeletePost = async (req: DeletePostRequest, res: Response) => {
  try {
    const { postId } = req.params;
    const user = req.user;

    const post = await PostModel.findByIdAndDelete(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.user.toString() !== user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this post' });
    }

    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { handleDeletePost };

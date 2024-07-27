import { Request, Response } from 'express';
import PostModel from '../../../models/post_model';
import CommentModel from '../../../models/comment_model';
import { IUser } from '../../../models/user_model';

interface PostRequest extends Request {
  user?: IUser;
}

const handlePostComment = async (req: PostRequest, res: Response) => {
  try {
    const postId = req.params.id;
    const { comment } = req.body;
    const user = req.user;

    if (!comment) {
      return res.status(400).json({ message: 'Comment is required' });
    }

    if (!user || !user._id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const newComment = new CommentModel({
      comment,
      user: user._id,
      post: postId,
    });

    const updatedPost = await PostModel.findByIdAndUpdate(
      postId,
      { $push: { comments: newComment._id } },
      { new: true }
    ).exec();

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    await newComment.save();

    return res.status(201).json({
      message: 'Comment added successfully',
      comment: newComment,
    });
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { handlePostComment };

import { Request, Response } from 'express';
import CommentModel from '../../../models/comment_model';

interface PostRequest extends Request {
  user?: any;
}

const handleReplyComment = async (req: PostRequest, res: Response) => {
  try {
    const commentId  = req.params.id;
    const { comment } = req.body;
    const user = req.user;

    if (!comment) {
      return res.status(400).json({ message: 'Reply comment is required' });
    }

    if (!user || !user._id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const reply = {
      comment,
      user: user._id,
      createdAt: new Date()
    };

    const updatedComment = await CommentModel.findByIdAndUpdate(
      commentId,
      { $push: { replies: reply } },
      { new: true }
    ).exec();

    if (!updatedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    return res.status(201).json({
      message: 'Reply added successfully',
      reply,
    });
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { handleReplyComment };

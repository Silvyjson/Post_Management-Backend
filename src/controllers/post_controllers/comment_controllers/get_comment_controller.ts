import { Request, Response } from 'express';
import PostModel from '../../../models/post_model';

const handleGetCommentsForPost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;

    const post = await PostModel.findById(postId)
      .populate({
        path: 'comments',
        populate: [{
          path: 'user',
          select: 'username profilePicture'
        },
        {
          path: 'replies',
          populate: {
            path: 'user',
            select: 'username profilePicture'
          }
        }
        ]
      })
      .exec();

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const formattedComments = post.comments.map((comment: any) => ({
      id: comment._id,
      comment: comment.comment,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
      user: {
        username: comment.user.username,
        profilePicture: comment.user.profilePicture,
      },
      replies: comment.replies.map((reply: any) => ({
        id: reply._id,
        comment: reply.comment,
        createdAt: reply.createdAt,
        user: {
          username: reply.user.username,
          profilePicture: reply.user.profilePicture,
        },
      }))
    }));

    return res.status(200).json({ comments: formattedComments });
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { handleGetCommentsForPost };

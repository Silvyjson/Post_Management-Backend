import { Request, Response } from 'express';
import PostModel from '../../../models/post_model';

const handleGetAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await PostModel.find()
      .populate('user', 'username profilePicture')
      .exec();

    const formattedPosts = posts.map(post => ({
      id: post._id,
      image: post.image,
      content: post.content,
      category: post.category,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      viewCount: post.viewCount,
      upvoteCount: post.votes.upvotes.length,
      downvoteCount: post.votes.downvotes.length,
      replyCount: post.comments.length,
      user: {
        username: post.user.username,
        profilePicture: post.user.profilePicture
      }
    }));

    return res.status(200).json({ posts: formattedPosts });
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { handleGetAllPosts };

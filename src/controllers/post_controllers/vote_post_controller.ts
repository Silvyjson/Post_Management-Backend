import { Request, Response } from 'express';
import PostModel from '../../models/post_model';

interface PostRequest extends Request {
  user?: any;
}

const handleVotePost = async (req: PostRequest, res: Response) => {
  try {
    const postId  = req.params.id;
    const { voteType } = req.body;
    const user = req.user;

    if (!user || !user._id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!['upvote', 'downvote'].includes(voteType)) {
      return res.status(400).json({ message: 'Invalid vote type' });
    }

    const post = await PostModel.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const userId = user._id.toString();

    if (voteType === 'upvote') {
      if (post.votes.upvotes.includes(userId)) {
        return res.status(400).json({ message: 'You have already upvoted this post' });
      }

      post.votes.downvotes = post.votes.downvotes.filter(id => id.toString() !== userId);

      post.votes.upvotes.push(userId);
    } else if (voteType === 'downvote') {
      if (post.votes.downvotes.includes(userId)) {
        return res.status(400).json({ message: 'You have already downvoted this post' });
      }

      post.votes.upvotes = post.votes.upvotes.filter(id => id.toString() !== userId);

      post.votes.downvotes.push(userId);
    }

    await post.save();

    return res.status(200).json({ message: `${voteType.charAt(0).toUpperCase() + voteType.slice(1)} successful`, post });
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { handleVotePost };

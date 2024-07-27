import { Request, Response } from 'express';
import PostModel from '../../../models/post_model';

const handleGetPostsByUpvotes = async (req: Request, res: Response) => {
  try {
    const posts = await PostModel.aggregate([
      {
        $addFields: {
          upvoteCount: { $size: "$votes.upvotes" }
        }
      },
      {
        $sort: { upvoteCount: -1 }
      }
    ]);

    return res.status(200).json({ posts });
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { handleGetPostsByUpvotes };

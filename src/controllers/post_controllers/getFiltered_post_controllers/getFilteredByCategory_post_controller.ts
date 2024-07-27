import { Request, Response } from 'express';
import PostModel from '../../../models/post_model';

const categoryOrder: { [key: string]: number } = {
  "Kidney": 1,
  "Headache": 2,
  "Stomachache": 3,
  "Leg pain": 4,
  "Malaria": 5
};

const handleGetPostsByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;

    const filter: any = {};

    if (category) {
      filter.category = category;
    }

    let posts = await PostModel.find(filter)
      .populate('user', 'username profilePicture')
      .exec();

    posts.sort((a: any, b: any) => {
      const categoryA = categoryOrder[a.category] || 0;
      const categoryB = categoryOrder[b.category] || 0;
      return categoryA - categoryB;
    });

    return res.status(200).json({ posts });
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { handleGetPostsByCategory };

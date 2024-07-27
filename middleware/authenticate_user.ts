import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user_model';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  userId: string;
}

interface AuthenticatedRequest extends Request {
  user?: any;
}

const AuthenticateUser = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const secret = process.env.JWT_TOKEN;

    if (!secret) {
      return res.status(500).json({ message: "JWT token secret is not defined" });
    }

    const verifiedToken = jwt.verify(token, secret) as JwtPayload;

    const user = await UserModel.findById(verifiedToken.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;

    next();
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { AuthenticateUser };


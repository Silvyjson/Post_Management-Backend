import { Request, Response } from 'express';
import UserModel from '../../models/user_model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface LoginUserRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

const handleLogin = async (req: LoginUserRequest, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (!process.env.JWT_TOKEN) {
      return res.status(500).json({ message: "JWT token not defined" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_TOKEN, {
      expiresIn: "1h",
    });

    const { password: _, ...safeUser } = user.toObject();

    return res.status(200).json({
      message: "Login successful",
      token,
      user: safeUser,
    });
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { handleLogin };

import { Request, Response } from 'express';
import UserModel from '../../models/user_model';
import bcrypt from 'bcryptjs';

interface RegisterUserRequest extends Request {
  body: {
    username: string;
    email: string;
    password: string;
    profilePicture: string
  };
}

const handleRegisterUser = async (req: RegisterUserRequest, res: Response) => {
  try {
    const { username, email, password, profilePicture } = req.body;

    if (!profilePicture || !username) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    if (!password || password.length < 6 ||
      !/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[$#&])/.test(password)) {
      return res.status(400).json({
        message: 'Password must be at least 6 characters long and must contain at least one number, one uppercase and one special character',
      });
    }

    const existingUser = await UserModel.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      profilePicture,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const { password: _, ...safeUser } = newUser.toObject();

    return res.status(200).json({
      message: 'user registered successfully',
      newUser: safeUser,
    });
  } catch (error: any) {
    return res.status(500).json({ error_message: error.message });
  }
};

export { handleRegisterUser };

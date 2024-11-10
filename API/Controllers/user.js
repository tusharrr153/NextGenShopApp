import { User } from "../Models/User.js";
import bcrypt from 'bcryptjs';


//user register controller
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email })
    if (user) return res.json({ message: "user already exit", success: false });
    const hashPass = await bcrypt.hash(password, 10);

    user = await User.create({ name, email, password: hashPass });
    res.json({ message: "user register successfully..", user, success: true })
  } catch (error) {
    res.json({ message: error.message })
  }
};


//user login controller
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) return res.json({ message: "user not found", success: false })
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) return res.json({ message: "invalid credetials", success: false })
    res.json({ message: `Welcome ${user.name}`, success: true, user })
  } catch (error) {
    res.json({ message: error.message })
  }

}


//all user controller
export const users = async (req, res) => {
  try {
    let users = await User.find().sort({ createdAt: -1 });
    res.json(users)
  } catch (error) {
    res.json(error.message)
  }
}


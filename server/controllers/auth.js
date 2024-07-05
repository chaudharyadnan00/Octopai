import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(422).json({
        success: false,
        error: {
          httpErrorCode: 422,
          message: "Email already exists",
        },
      });
    }
    const { name, username, email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      username,
      email,
      password: passwordHash,
    });
    const UserId = newUser._id;
    res.status(200).json({
      success: true,
      data: {
        UserId,
        email,
        name,
        message: "User registered successfully",
      },
      error: {
        httpErrorCode: 404,
        message: "",
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: {
        httpErrorCode: 500,
        message: err.message,
      },
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user)
      return res.status(400).json({
        success: false,
        error: {
          httpErrorCode: 400,
          message: "User does not exist.",
        },
      });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        success: false,
        error: {
          httpErrorCode: 400,
          message: "Invalid credentials.",
        },
      });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("cookie", token, { httpOnly: true });
    delete user.password;
    return res.status(200).json({
      success: true,
      data: {
        user,
        token,
        email,
        name: user.name,
        message: "User login successfully",
      },
      error: {
        httpErrorCode: 404,
        message: "",
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: {
        httpErrorCode: 500,
        message: err.message,
      },
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("cookie");
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
      error: {
        httpErrorCode: 404,
        message: "",
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: {
        httpErrorCode: 500,
        message: err.message,
      },
    });
  }
};

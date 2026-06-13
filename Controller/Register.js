import bcrypt from "bcryptjs";
import { RegisterModel } from "../Models/UsersSchema.js";

export const sendRegister = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
  } = req.body;

  try {

    const hashedPassword =
      await bcrypt.hash(password, 10);

    await RegisterModel.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Registered Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
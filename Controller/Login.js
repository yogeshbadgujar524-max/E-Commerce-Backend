import { RegisterModel } from "../Models/UsersSchema.js";
import bcrypt from "bcryptjs";

export const sendLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await RegisterModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found",
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password",
            });
        }

        res.status(200).json({
            success: true,
            message: "Login Successful",
            user,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

export const getUsers = async (req, res) => {
    const users = await RegisterModel.find();

    res.status(200).json({
        success: true,
        users,
    });
};
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();


export const generateToken = (userId, res) => {
    try {
    
    
    
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "production",
    } );


    
    return token;
    } catch (error) {
        console.error("Token generation failed", error);
        res.status(500).json({message: "Token generation failed"});
    }
    
};
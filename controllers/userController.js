const user = require("../models/user");
const bcrypt = require("bcrypt");


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        //hashpasssword 
        const hashedPassword = await bcrypt.hash(password, 10);
        //console.log(hashedPassword)
        const result = await user.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(201).json({
            success: true,
            message: "register created successfully",
            data: result,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await user.findOne({ email });
        console.log(existingUser)
        if (!existingUser) {
            return res.status(400).json({ message: "User not found" });
        }
        //comapre password
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        // console.log(isPasswordValid)

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentails" });
        }

        //token generate
        const jwt = require("jsonwebtoken");
        const token = jwt.sign({ ID: existingUser._id }, process.env.JWT_SECRET, );
        // console.log(token)

        //set cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, //1 day
        });



        res.status(200).json({
            success: true,
            message: "Login successful",
            data: existingUser,
            token,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie("jwt")
        res.status(200).json({
            success: true,
            message: "Logout successful",
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



const profile = async (req, res) => {
    try {
        // console.log(req.user)
        const profile = await user.findById(req.user.ID);
        // console.log("profile")
        res.json(profile)

    } catch (error) {
        console.log(error)
    }
}





module.exports = { registerUser, loginUser, logout, profile };
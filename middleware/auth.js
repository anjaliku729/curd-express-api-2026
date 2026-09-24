const jwt = require("jsonwebtoken")


const isAuthrized = async (req, res, next) => {
    try {
        // res.send("auth chek")
        const token = req.cookies.jwt
        // console.log(token)
    if(!token) {
        return res.status(401).json({
            message:"please login first"
        })

    }
    
    const decoded = jwt.verify(token, 'kgfiusdhoiw963980cu')
    //  console.log(decoded)
    req.user = decoded
    next()
    
    
    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = { isAuthrized }
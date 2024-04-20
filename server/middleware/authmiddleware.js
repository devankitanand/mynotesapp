// const jwt = require('jsonwebtoken');
// const User = require('../models/usermodel');

// const protect = async(req,res,next)=>{
//     let token;
//     if(
//         req.headers.authorization && 
//         req.headers.authorization.startsWith("Bearer")
//     ){
//         try{
//             token =req.headers.authorization.split(" ")[1];
//             const decoded = jwt.verify(token,process.env.JWT_TOKEN);
//             req.user = await User.findById(decoded.id).select('-password');
//         //    const vaid = await User.findById(decoded.id);
//             next();
//         }
//         catch(error){
//             res.status(401);
//             throw new Error("Not Authorized, token failed");
//         }
        
//     }
//     if(!token){
//         res.status(401);
//         throw new Error("Not Authorized, no token");
//     }
// };

// module.exports = {protect};


const jwt = require('jsonwebtoken');
const User = require('../models/usermodel');

const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_TOKEN);
            
            // Check if User.findById is working correctly
            User.findById(decoded.id).select('-password')
                .then((user) => {
                    if (!user) {
                        return res.status(404).json({ message: "User not found" });
                    }
                    req.user = user;
                    next();
                })
                .catch((err) => {
                    console.error("Error finding user:", err);
                    res.status(500).json({ message: "Error retrieving user" });
                });

        } catch (error) {
            console.error("Authentication error:", error);
            res.status(401).json({ message: "Not Authorized, token failed" });
        }
    } else {
        res.status(401).json({ message: "Not Authorized, no token" });
    }
};

module.exports = { protect };

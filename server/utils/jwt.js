const jwt =require('jsonwebtoken')

const generatetoken = (id)=>{
    // id = user._id
    const tokenPayload = { id };
    console.log('Token payload:', tokenPayload); // Add this line to debug
    return jwt.sign(tokenPayload, process.env.JWT_TOKEN,{
        expiresIn:"30d"
    });
};
module.exports = generatetoken;
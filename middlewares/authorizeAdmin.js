const jwt= require('jsonwebtoken')
const {JWT_SECRET_KEY} = process.env

const isAdmin = (req,res,next)=>{
   
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if(!authHeader) return res.status(401).send('Access denied. No token provided.');

    const authToken = authHeader.split(' ')[1];
    try{
        const payload = jwt.verify(authToken, JWT_SECRET_KEY)
        
        req.admin = payload;
        next()
    } catch(e){
        next(e)
    }
}

module.exports = isAdmin;
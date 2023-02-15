const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

function verifyToken(req, res,next) {
   const token = req.headers.token;
   // console.log("token: "+token);
   if (!token) return res.status(401).json({"status":"warn","msg":"You are not authenticated"});
   jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
      if (err) {
         return res.status(403).send({"status":"warn","msg":"Token is not valid"});
      }
      req.user = user.ID;
      // console.log("User: "+req.user.id);
      next();
   })
   
}


function verifyUser(req, res,next) {
   verifyToken(req,res,()=>{
      // console.log("verify user called:");
      // if (req.user.id == req.params.id || req.user.isAdmin) {
         next();
      // }
      // else {
         // return res.status(401).send("You are not authorised");
      // }
   })

}

module.exports = { verifyUser }

const jwt = require("jsonwebtoken");

const verifyToken = (req, res,next) => {
  try {

    // get token from request header
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided" });
    }

    // remove "Bearer " from token
    const actualToken = token.split(" ")[1];

    // verify token
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

    // store user id in request
    req.user = decoded;

    next(); // move to next function

  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
const verifyAdmin=(req,res,next)=>{
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  if(req.user.role !== 'admin'){
    return res.status(403).json({ message: "Admin access required" });
  }
  next();
}

module.exports = {verifyToken,verifyAdmin};
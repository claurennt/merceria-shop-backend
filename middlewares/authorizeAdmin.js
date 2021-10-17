const jwt = require("jsonwebtoken");
const { JWT_ADMIN_KEY } = process.env;

const authorizeAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader)
    return res.status(401).send("Access denied. No token provided.");

  const [_, authToken] = authHeader.split(" ");
  try {
    //check if the admins token passed with the headers matches the JWS ADMIN KEY
    const payload = jwt.verify(authToken, JWT_ADMIN_KEY);
    //if successfull return the admin and call next
    req.admin = payload;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = authorizeAdmin;

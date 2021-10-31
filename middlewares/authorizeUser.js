const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

const checkUserToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).send("Access denied. No token provided.");

  const [_, authToken] = authHeader.split(" ");
  try {
    const payload = jwt.verify(authToken, JWT_SECRET_KEY);

    req.user = payload;

    next();
  } catch (e) {
    next(e);
  }
};

module.exports = checkUserToken;

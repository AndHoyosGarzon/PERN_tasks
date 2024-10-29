import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, "andres123", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Token unauthorized" });
    }

    req.userId = decoded.id;
    next();
  });
};

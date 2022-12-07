import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const comparePasswords = (passwordSentByUser, hash) => {
  return bcrypt.compare(passwordSentByUser, hash);
};

export const hashPassword = (passwordSentByUser) => {
  return bcrypt.hash(passwordSentByUser, 5);
  // 5 is salt. It will give diff variety and generate hard hash passwords
};

export const createJWT = (user) => {
  // We will get user when the person tries to signup
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  // If the suer is not sending bearer token
  if (!bearer) {
    res.status(401);
    res.json({ message: "bhaiya you are not authorized" });
    return;
  }

  // When the user is sending bearer token. So we are splitting and extracting the token
  const [, token] = bearer.split(""); //it will return an array

  // If we don't have token
  if (!token) {
    res.status(401);
    res.json({ message: "bhaiya valid token toa bejiye" });
    return;
  }

  //When we have token we should verify it
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    res.status(401);
    res.json({ message: "not valid token" });
    return;
  }
};

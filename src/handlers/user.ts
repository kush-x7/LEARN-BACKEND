import prisma from "../db"; //This is helping us to directly talk with prisma models
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

// WE WILL BE CREATING A NEW USER
export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  });

  // SENDING NEWLY CREATED TOKEN BACK TO THE USER
  const token = createJWT(user);
  res.json({ token: token });
};

//WHEN THE USER SIGNIN
export const signIn = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  //iF THE PASSWORD IS WRONG
  const isValid = comparePasswords(req.body.password, user.password);
  if (!isValid) {
    res.status(401);
    res.json({ message: "Sike thats the wrong password" });
    return;
  }

  // IF EVERYTHING IS FINE
  const token = createJWT(user);
  res.json({ token });
};

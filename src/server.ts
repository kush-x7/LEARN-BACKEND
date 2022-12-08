import express from "express";
import router from "./router";
import morgan from "morgan";
import { protect } from "./modules/auth";
import { createNewUser, signIn } from "./handlers/user";

const app = express();

// This morgan middleware should be on the top
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // THis will enable query params otherwise the we will receive link as a string

// app.use((req, res, next) => {
//   req.kush_secret = "cat";
//   next();
// });

// Default
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.use("/api", protect, router); // Example /api/product  || we are mounting api before our router
// We are adding protector before router so I non authorized person cannot access router directly

// We are not using protect here because protect will check for tokens and before signin we won't be having a token
app.post("/user", createNewUser);
app.post("/signin", signIn);

export default app;

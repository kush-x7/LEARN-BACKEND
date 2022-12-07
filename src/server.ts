import express from "express";
import router from "./router";
import morgan from "morgan";
import { protect } from "./modules/auth";

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
// We are adding protector before router so I non authorized person cannot acees router directly

export default app;

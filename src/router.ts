import { Router } from "express";
import { body, oneOf } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

// PRODUCT--------------------------------
router.get("/product/:id", () => {});
router.get("/product", (req, res) => {
  res.json({ message: "You landed on product page" });
});

// This says req.body should a a field name on it
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {
    console.log(req.body);
  }
);
router.post("/product", body("name").isString(), handleInputErrors, () => {}); //Creating ID
router.delete("/product/:id", () => {});
// ---------------------------------------

// UPDATE--------------------------------
router.get("/update", () => {});
router.get("/update/:id", () => {});

router.post(
  "/update/:id",
  body("title").exists().isString(), //They are required
  body("body").exists().isString(), //They are required
  body("productId").exists().isString(),
  (req, res) => {}
);
router.put(
  "/update",
  body("title").optional(),
  body("body").optional(),
  body("version").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  () => {}
); //Creating ID
router.delete("/update/:id", () => {});
// ---------------------------------------

// UPDATE POINT--------------------------------
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});

router.post(
  "/updatepoint",
  body("name").toString(),
  body("description").toString(),
  body("updateId").exists().isString(),
  () => {}
); //Creating ID
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.delete("/updatepoint/:id", () => {});
// ---------------------------------------

export default router;

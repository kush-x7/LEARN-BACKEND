import { Router } from "express";

const router = Router();

// PRODUCT--------------------------------
router.get("/product", (req, res) => {
  console.log("server ka console");
  res.json({ message: "You landed on product page" });
});
router.get("/product/:id", () => {});

router.put("/product/:id", () => {});
router.delete("/product/:id", () => {});
router.post("/product", () => {}); //Creating ID
// ---------------------------------------

// UPDATE--------------------------------
router.get("/update", () => {});
router.get("/update/:id", () => {});

router.put("/update/:id", () => {});
router.delete("/update/:id", () => {});
router.post("/update", () => {}); //Creating ID
// ---------------------------------------

// UPDATE POINT--------------------------------
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});

router.put("/updatepoint/:id", () => {});
router.delete("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {}); //Creating ID
// ---------------------------------------

export default router;
import { Router } from "express";
import userSchema from "../validators/userSchema.js";

const router = Router();

// POST - /users - Skapa en ny användare
router.post("/", (req, res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) return next(error);

  // valideringen går bra
  res.status(201).json({ message: "Användare skapad" });
});

export default router;

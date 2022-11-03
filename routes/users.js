import {
  createUser,
  getAllUsers,
  getSingleUser,
} from "../controllers/userController.js";

import { Router } from "express";

const router = Router();

router.get("/", getAllUsers);

router.get("/:id", getSingleUser);

router.post("/", createUser);

router.delete("/:id", (req, res) => {
  res.json({ user: "delete a user" });
});

router.patch("/:id", (req, res) => {
  res.json({ user: "update a user" });
});

export default router;

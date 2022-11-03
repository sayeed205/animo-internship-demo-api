import {
  createUser,
  deleteSingleUser,
  getAllUsers,
  getSingleUser,
  updateSingleWorkout,
} from "../controllers/userController.js";

import { Router } from "express";

const router = Router();

router.get("/", getAllUsers);

router.get("/:id", getSingleUser);

router.post("/", createUser);

router.delete("/:id", deleteSingleUser);

router.patch("/:id", updateSingleWorkout);

export default router;

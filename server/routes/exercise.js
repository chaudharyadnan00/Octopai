import express from "express";
import {
  getExercises,
  getExerciseForm,
  submitExercise,
} from "../controllers/exercise.js";

const router = express.Router();


router.get("/getExercises", getExercises);
router.get("/getExerciseForm/:id", getExerciseForm);
router.post("/submitExercise/:id", submitExercise);

export default router;

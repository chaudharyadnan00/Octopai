import Exercise from "../models/Exercise.js";
import Submission from "../models/Submission.js";

export const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    return res.status(200).json({
      success: true,
      data: exercises,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

export const getExerciseForm = async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await Exercise.findById(id);
    if (!exercise) {
      return res.status(404).json({
        success: false,
        error: "Exercise not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: exercise,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

export const submitExercise = async (req, res) => {
  try {
    const { id } = req.params;
    const { position, userId } = req.body;

    const exercise = await Exercise.findById(id);
    if (!exercise) {
      return res.status(404).json({
        success: false,
        error: "Exercise not found",
      });
    }

    const submission = new Submission({ exercise: id, position, user: userId });
    await submission.save();

    return res.status(201).json({
      success: true,
      data: submission,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

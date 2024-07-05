import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema({
  exercise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exercise",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  position: {
    type: String,
    enum: ["Standing", "Sitting", "Lying"],
    required: true,
  },
});

const Submission = mongoose.model("Submission", SubmissionSchema);
export default Submission;

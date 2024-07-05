import mongoose from 'mongoose';

const ExerciseSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    url: { 
        type: String, 
        required: true 
    },
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);
export default Exercise;

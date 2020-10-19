const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Exercise = require("./Exercise");

const resistanceExerciseSchema = new Schema({
    weight: {
        type: Number,
        required: true,
        min: [0, 'How did you lift negative weight?']
    },
    reps: {
        type: Number,
        required: true,
        min: [0, 'How did you do less than zero reps?']
    },
    sets: {
        type: Number,
        required: true,
        min: [0, "Negative sets aren't a thing."]
    }
}, Exercise.options);

const ResistanceExercise = Exercise.discriminator('resistance', resistanceExerciseSchema);

module.exports = ResistanceExercise;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Exercise = require("./Exercise");

const cardioExerciseSchema = new Schema({
    distance: {
        type: Number,
        required: true,
        min: [0, 'You expect me to believe that you ran negative distance?']
    }
}, Exercise.options);

const CardioExercise = Exercise.discriminator('cardio', cardioExerciseSchema);


module.exports = CardioExercise;
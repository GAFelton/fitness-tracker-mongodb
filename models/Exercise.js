const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const options = { discriminatorKey: 'type' };

const ExerciseSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name this exercise. You'll thank me later when you're not scratching your head trying to figure out what you did for 10 sets of 20 reps of 120 lbs last Tuesday."]
    },
    duration: {
        type: Number,
        required: true,
        min: [1, 'You completed this exercise in zero or less minutes? Really?']
    }
},
options);

const Exercise = mongoose.model("Exercise", ExerciseSchema);


module.exports = Exercise;

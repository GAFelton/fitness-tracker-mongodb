const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        enum: ["resistance", "cardio"]
    },
    name: String,
    duration: Number,
    // How to split up other keys by exercise type?

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;

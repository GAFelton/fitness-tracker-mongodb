const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
          type: Schema.Types.ObjectId,
          ref: "Exercise"
        }
      ]

}, { toJSON: { virtuals: true } });

WorkoutSchema.set('toObject', { virtuals: true });

WorkoutSchema.virtual('totalDuration').get(function() {
  Workout.find({}).populate('exercises')
  let totalDuration = this.exercises.reduce(function(prev, cur) {
    return prev + cur.duration;
  }, 0);
  return totalDuration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

const db = require("../models");

module.exports = function(app) {

    // fetch("/api/workouts"); get last workout

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).sort({ _id: -1 }).limit(10)
            .populate("exercises")
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // fetch("/api/workouts/" + id, {method: "PUT",    Add new exercise
    app.put("/api/workouts/:id", (req, res) => {
        
        if (req.body.type === "cardio") {
            // Why is id unread here? What is params ID for?
            // const id = req.params.id;
            db.CardioExercise.create(req.body)
                .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
                .then(dbWorkout => {
                    res.json(dbWorkout);
                })
                .catch(err => {
                    res.json(err);
                });
        } else if (req.body.type === "resistance") {
            db.ResistanceExercise.create(req.body)
                .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
                .then(dbWorkout => {
                    res.json(dbWorkout);
                })
                .catch(err => {
                    res.json(err);
                });
        } else {
            throw new Error("Invalid Workout type.");
        };
    });




    //fetch("/api/workouts", {method: "POST",    Create new workout
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
    // fetch(`/api/workouts/range`);     Get workouts in range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .populate("exercises")
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
}
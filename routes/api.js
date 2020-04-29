const router = require("express").Router();
const workout = require("../models/workouts");


router.post("/api/workouts", ({ body }, res) => {
    workout.create(body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json(err);
        });

});
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

router.get("/api/workouts", (body, res) => {
    workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


// add delete route
router.delete("/api/workout", ({ body }, res) => {
    workout.findByIdAndDelete(body.id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
        { new: true, runValidators: true }

    ).then(data => {
        res.json(data)
    })
        .catch(err => {
            res.json(err);
        });
})

module.exports = router;
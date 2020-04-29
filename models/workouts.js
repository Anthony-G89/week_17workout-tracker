const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()

    },
    exercises:[
        {
            type: {
                type: String,
                trim: true,
                required: "Enter your exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise name"
            }, 
            duration: {
                type: Number,
                required: "How long was the workout"
            },
            weight: {
                type: Number,
                required: "How many lbs"
            },
            reps: {
                type: Number,
                required: "How many reps did you do"
            },
            sets: {
                type: Number,
                required: "How many sets did you do"
            },
            distance: {
                type: Number,
                required: "How many miles did you run"
            },


        }
    ]


});

const workouts = mongoose.model("workouts", workoutSchema);

module.exports = workouts;




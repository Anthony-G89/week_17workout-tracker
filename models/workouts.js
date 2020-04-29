const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter name of Workout"
      },
      value: {
        type: Number,
        required: "Enter how reps"
      },
      
      date: {
        type: Date,
        default: Date.now
      }

});

const workouts = mongoose.model("workouts", workoutSchema);

module.exports = workouts;




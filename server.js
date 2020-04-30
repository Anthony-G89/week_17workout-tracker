const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// ADD MY ROUTE LATER
app.use(require("./routes/api"));
app.use(require("./routes/html-routes"));


app.listen(PORT, ()=>{
    console.log(`APP running on port ${PORT}!`);
    
});
const express = require("express");
const bodyParser = require("body-parser")

const app = express()

app.set("view enjine", "ejs");

app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";



    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Error: current day is equal to " + currentDay)
    }

    res.render("list", { kindOfDay: day });
});

app.listen(1717, function() {
    console.log("Server running on pott 1717!");
})
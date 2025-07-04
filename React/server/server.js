const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const db = require('./DB/db');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 



app.get('/', (req, res) => {
  res.send('Hello World!')
});



// post user data
app.post("/registration", (req, res) => {
    const { Name, Password } = req.body;
    
    const query = "INSERT INTO testAuth (Name, Password) VALUES (?, ?)";
    db.query(query, [Name, Password], (err, result) => {
        if (err) {
            console.error("Error inserting data: " + err.stack);
            return res.status(500).send("Error inserting data.");
        }
        console.log("1 record inserted.");
        res.status(201).json({ message: "Data inserted successfully." });
    });
});


// Show all users
app.get("/user", (req, res) => {
    const query = "SELECT * FROM testAuth"; // testAuth টেবিল থেকে সব ডেটা আনবে
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching users: " + err.stack);
            return res.status(500).send("Error fetching user data.");
        }

        res.status(200).json(results); // JSON আকারে রেসপন্স পাঠাবে
    });
});

// Login API
app.post("/login", (req, res) => {
    const { Name, Password } = req.body;

    if (!Name || !Password) {
        return res.status(400).send("Name and Password are required");
    }

    const query = "SELECT * FROM testAuth WHERE Name = ? AND Password = ?";
    db.query(query, [Name, Password], (err, results) => {
        if (err) {
            console.error("Error during login:", err);
            return res.status(500).send("Internal Server Error");
        }

        if (results.length > 0) {
            // User found
            return res.status(200).json({
                message: "Login successful",
                user: results[0]
            });
        } else {
            // User not found or wrong credentials
            return res.status(401).json({
                message: "Invalid Name or Password"
            });
        }
    });
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});

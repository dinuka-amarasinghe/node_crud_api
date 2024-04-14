const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// MongoDB Connection
mongoose.connect('mongodb+srv://dinukahamarasinghe:LGyvz0Uqx2y7eF5k@node-api.vcuintw.mongodb.net/?retryWrites=true&w=majority&appName=Node-API')
    .then(() => {
        console.log('Connected to database!');
    })
    .catch(() => {
        console.log('Connection failed!');
    });

// Routes
app.use("/api/products", productRoute);



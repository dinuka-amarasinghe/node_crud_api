const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const port = 3000;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
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



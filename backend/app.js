const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const fileupload = require("express-fileupload")

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
    credentials: true, // Enable credentials (cookies, authorization headers, etc)
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(fileupload({
    useTempFiles: true
}))

// Route import
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use(errorMiddleware);

module.exports = app;

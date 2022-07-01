const express = require("express");
const app = express();
const connectDB = require("./config/connection");
const authRouter = require("./routes/auth");

// connect with db
connectDB();

// middleware
app.use(express.json());

app.use("/api/auth", authRouter);

const port = 5000;
app.listen(port, err =>
  err ? console.log(err) : console.log(`server started on port ${port}`)
);

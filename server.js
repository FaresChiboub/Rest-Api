const express = require("express");
const app = express();
const Port = process.env.Port || 3000;
const connectDb = require("./config/connectDb");

require("dotenv").config();
connectDb();
app.use(express.json());
app.use("/api/user", require("./routes/userRoute"));

app.listen(Port, (err) => {
  err ? console.log(err) : console.log(`server is running on Port ${Port}`);
});

import * as dotenv from "dotenv";

import express from "express";
import mongoose from "mongoose";
import usersRoute from "./routes/users.js"; // import routes

dotenv.config();

// express app
const app = express();

// middleware
app.use(express.json());

app.use("/", (req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// routes
app.use("/api/users", usersRoute);

// Database connection
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Connected to database");

    // listen for requests
    const PORT = process.env.PORT;
    app.listen(PORT, () =>
      console.log(`listening on port ${PORT}\nOpen http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log(err));

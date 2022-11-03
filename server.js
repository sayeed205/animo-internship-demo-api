import * as dotenv from "dotenv";

import express from "express";
import mongoose from "mongoose";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import usersRoute from "./routes/users.js"; // import routes

dotenv.config();

const localServerURL = process.env.LOCAL_SERVER_URL;
const cloudServerURL = process.env.CLOUD_SERVER_URL;

// swaggerJsDoc options
const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Animo Internship Demo API",
      version: "1.0.0",
      description: "Demo API for Internship assignment in Animo",
    },
    servers: [
      {
        url: cloudServerURL,
        description: "Cloud server or Production server",
      },
      {
        url: localServerURL,
        description: "Local dev server",
      },
    ],
  },

  apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(options);

// express app
const app = express();

// swagger docs route
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(specs));

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

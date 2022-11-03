import * as dotenv from "dotenv";

import bodyParser from "body-parser";
import express from "express";

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ api: "hello RESTful api" });
});

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`listening on port ${PORT}\nOpen http://localhost:${PORT}`)
);

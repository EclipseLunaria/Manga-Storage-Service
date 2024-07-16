import express from "express";
import process from "process";
import router from "./routes/routes";
import commonRouter from "./routes/shared";

const app = express();
// load environment variable or default to 6968
const port = process.env.PORT || 6966;

//attach common router
app.use("/common/", commonRouter);

//attach storage router
app.use("/storage/", router);

app.get("/", (req, res) => {
  res.send("Storage Service is online.");
});

app.listen(port, () => {
  console.log(
    `Storage Service is running locally to http://localhost:${port} and internally as http://storage-service:${port}`
  );
});

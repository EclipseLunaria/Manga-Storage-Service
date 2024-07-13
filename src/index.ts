import express from "express";
import process from "process";
import dotenv from "dotenv"
import router from "./routes";

const app = express()
// load environment variable or default to 6968
const port = process.env.PORT || 6968
app.use("/storage/", router)

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
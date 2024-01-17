import express from "express";
import * as config from "./config";
import path from "path";

const app = express();
const baseDir = process.cwd();

app.set("view engine", "ejs");
app.set("views", path.join(baseDir, "src/views"));

app.get("/", (req, res) => {
  res.render("pages/welcome");
});

app.listen(config.getPort(), () => {
  console.log(`Listening at http://localhost:${config.getPort()}`);
});

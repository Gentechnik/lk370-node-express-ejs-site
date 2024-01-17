import express from "express";

const app = express();
const port = 4112;

app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
    <title>Info Site</title></head>
    <body>
        <h1>Info Site</h1>
        <p>This is an Info Site</p>
    </body></html>`);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

var express = require("express");

const app = express();
const port = 5000;

console.log("The application is running on", port);

app.get("/ping", async (req, res) => {
  res.send("Test passed");
});

// start the Express server
app.listen(port);

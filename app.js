const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.listen(3000, () => {
  console.log("Server running at 3000");
});


const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Nodvyt server is running!");
});

app.get("/api/status", (req, res) => {
  res.json({
    app: "Nodvyt",
    status: "online"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Nodvyt running on port ${PORT}`);
});

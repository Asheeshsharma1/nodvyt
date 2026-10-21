
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve the Nodvyt website
app.use(express.static(path.join(__dirname, "public")));

// Health-check API
app.get("/api/status", (req, res) => {
  res.json({
    app: "Nodvyt",
    status: "online"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Nodvyt running on port ${PORT}`);
});

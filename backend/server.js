const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
app.use(cors());

const API_URL =
  "https://www.thesportsdb.com/api/v1/json/123/eventsnextleague.php?id=4480";

app.get("/api/upcoming-matches", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching upcoming matches:", error);
    res.status(500).json({ error: "Failed to fetch upcoming matches" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

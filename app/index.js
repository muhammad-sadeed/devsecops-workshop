const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("M. Sadeed Ahmad - F2023266183"));
app.listen(3000, () => console.log("Running on port 3000"));

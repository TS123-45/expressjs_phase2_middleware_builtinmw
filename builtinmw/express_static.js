const express = require("express");
const path = require("path");

const app = express();
const PORT = 3500;

/* Serve static files */
const publicpath = path.join(__dirname, "..", "..", "..", "public");
console.log(publicpath);
app.use(express.static(publicpath));

app.get("/", (req, res) => {
  res.sendFile(path.join(path.join(publicpath,"indexone.html")));
}); 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3500;

/* Built-in middleware to parse form data */
app.use(express.urlencoded({ extended: true }));
const publicpath = path.join(__dirname, "..", "..", "..", "public");
console.log(publicpath);
app.use(express.static(publicpath));

app.get("/", (req, res) => {
  res.sendFile(path.join(path.join(publicpath,"indextwo.html")));
}); 

app.post("/submit", (req, res) => {
  console.log(req.body); // without app.use(express.urlencoded()) req.body becomes undefined
  console.log(req.body.name);
  res.send("Form data received successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


/* What happens here
Browser submits HTML form
Data is sent as urlencoded text
express.urlencoded() parses it
Converted into a JS object
Stored in req.body */
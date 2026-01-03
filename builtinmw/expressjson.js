const express = require("express");
const app = express();

const PORT = 3500;

/* JSON parsing middleware */
app.use(express.json());

app.post("/user", (req, res) => {
  console.log(req.body); // without app.use(express.json()) req.body becomes undefined
  console.log(req.body.name);
  res.send("JSON data received");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// curl -X POST http://localhost:3500/user -H "Content-Type: application/json" -d "{\"name\":\"Tony\",\"age\":21}"

/* What happens here
Client sends JSON
express.json() parses it
Data becomes a JavaScript object
Stored in req.body */

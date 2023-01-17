const express = require("express");

const app = express();

app.use(express.urlencoded());

const port = 3000;
app.listen(port, () =>
  console.log(`Server is up and running on port ${port}...`)
);

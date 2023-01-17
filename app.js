const express = require("express");

const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/index.html`);
});

app.post("/calculator", (req, res) => {
  const { num1, num2 } = req.body;

  if (num1 && num2) {
    const sum = Number(num1) + Number(num2);
    res.status(200).send("Sum is " + sum);
  } else {
    res.status(404).send("Something went wrong!");
  }
});

const port = 3000;
app.listen(port, () =>
  console.log(`Server is up and running on port ${port}...`)
);

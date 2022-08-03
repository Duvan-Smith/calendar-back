const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    ok: true,
  });
});

app.listen(4000, () => {
  console.log(`Puerto ${4000}`);
});

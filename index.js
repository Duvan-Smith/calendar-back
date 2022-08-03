const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.static("public"));

// TODO: Mover logica
// app.get("/", (req, res) => {
//   res.json({
//     ok: true,
//   });
// });

app.listen(process.env.PORT, () => {
  console.log(`Puerto ${process.env.PORT}`);
});

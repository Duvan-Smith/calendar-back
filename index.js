const express = require("express");
const { dbConection } = require("./database/config");
require("dotenv").config();
const cors = require("cors");

const app = express();

dbConection();

app.use(cors());

app.use(express.static("public"));
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log(`Puerto ${process.env.PORT}`);
});

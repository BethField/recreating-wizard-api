const express = require("express");
const cors = require("cors");
const elixirsRouters = require("./routes/elixirsR");
const housesRouters = require("./routes/housesR");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/elixirs", elixirsRouters);
app.use("/houses", housesRouters);

module.exports = app;

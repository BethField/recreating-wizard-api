const express = require("express");
const cors = require("cors");
const elixirsRouters = require("./routes/elixirsR");
const housesRouters = require("./routes/housesR");
const feedbackRouters = require("./routes/feedbackR");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/elixirs", elixirsRouters);
app.use("/houses", housesRouters);
app.use("/feedback", feedbackRouters);

module.exports = app;

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/blog", blogRoutes);

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on localhost port ${listener.address().port}`);
});

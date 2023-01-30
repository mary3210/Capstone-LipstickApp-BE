const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/posts", (req, res) => {
    res.send("testing1");
})

app.get("/collection/",(req, res) => {
    res.send("testing2");
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));

// const express = require("express");
// const path = require("path");
// const app = express();
// app.use(express.static(__dirname + "./dist/e-commerce-angular"));
// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/e-commerce-angular/index.html"));
// });
// app.listen(process.env.PORT || 8080);

const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static("./dist/e-commerce-angular"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/e-commerce-angular" })
);
app.listen(process.env.PORT || 8080);

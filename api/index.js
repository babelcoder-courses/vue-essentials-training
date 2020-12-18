const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
let fs = require("fs");
let db = require("./db.js");

let server = jsonServer.create();

fs.writeFileSync("/tmp/db.json", JSON.stringify(db()));

let router = jsonServer.router("/tmp/db.json");
let port = process.env.PORT || 5000;

server.db = router.db;

server.use(cors());
server.use(auth);
server.use(router);
server.listen(port, function () {
  console.log("JSON Server is running on http://localhost:" + port);
});

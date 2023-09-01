var express = require("express");
var cookieParser = require("cookie-parser");
var http = require("http");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
var config = require("./config");
const cors = require('cors');

var app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(cookieParser());
app.use(require("morgan")("dev"));
app.use("/", require("./routes"));
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.set("port", config.port);

var server = http.createServer(app);
server.listen(config.port, config.host, function () {
  console.log("Server at http://" + config.host + ":" + config.port);
});

module.exports = app;

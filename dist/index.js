"use strict";

var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _morgan = _interopRequireDefault(require("morgan"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _routes = _interopRequireDefault(require("./routes/routes"));
var _documentation = require("./documentation");
var _swaggerConfig = require("./swaggerConfig");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
(0, _swaggerConfig.swaggerConfig)(app);
app.use(_express["default"].json({
  limit: "50mb"
}));
app.use((0, _cors["default"])({
  origin: "*"
}));
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])("dev"));
var PORT = process.env.PORT || 8080;
var MONGODB_URL = process.env.MONGODB_URL;
_mongoose["default"].connect(MONGODB_URL).then(function () {
  app.listen(PORT, function () {
    console.log("Mongodb connected and server is running on port ".concat(PORT));
  });
})["catch"](function (error) {
  return console.log(error.message);
});
app.get("/", function (req, res) {
  res.send(_documentation.Documentation);
});
app.use("/api/", _routes["default"]);
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    message: "Internal Server Error"
  });
});
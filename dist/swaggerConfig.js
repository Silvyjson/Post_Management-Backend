"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swaggerConfig = void 0;
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "This project is a comprehensive platform for managing posts, comments, and user interactions. Built with Node.js, Express, and MongoDB, it includes functionalities for creating posts, adding comments, replying to comments, and filtering posts by categories, time, and upvotes. It supports user authentication and allows for dynamic interaction with posts through upvotes and downvotes."
    },
    host: "localhost:8008",
    basePath: "/api"
  },
  apis: ["./src/routes/routes*.ts"]
};
var specs = (0, _swaggerJsdoc["default"])(options);
var swaggerConfig = exports.swaggerConfig = function swaggerConfig(app) {
  app.use("/api-docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
};
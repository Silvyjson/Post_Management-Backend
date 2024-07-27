"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userSchema = new _mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    required: false
  },
  posts: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
});
var UserModel = (0, _mongoose.model)('User', userSchema);
var _default = exports["default"] = UserModel;
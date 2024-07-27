"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var replySchema = new _mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    "default": Date.now
  },
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});
var commentSchema = new _mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    "default": Date.now
  },
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  replies: [replySchema]
});
var CommentModel = (0, _mongoose.model)('Comment', commentSchema);
var _default = exports["default"] = CommentModel;
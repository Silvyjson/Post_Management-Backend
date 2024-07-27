"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var postSchema = new _mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    "enum": ["Kidney", "Headache", "Stomachache", "Leg pain", "Malaria"],
    required: true
  },
  createdAt: {
    type: Date,
    "default": Date.now
  },
  updatedAt: {
    type: Date,
    "default": Date.now
  },
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  votes: {
    upvotes: [{
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    downvotes: [{
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  comments: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  viewCount: {
    type: Number,
    "default": 0
  }
});
var PostModel = (0, _mongoose.model)('Post', postSchema);
var _default = exports["default"] = PostModel;
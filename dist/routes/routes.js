"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _authenticate_user = require("../middleware/authenticate_user");
var _auth_controller = require("../controllers/auth_controllers/auth_controller");
var _login_controller = require("../controllers/auth_controllers/login_controller");
var _create_post_controller = require("../controllers/post_controllers/create_post_controller");
var _edit_post_controller = require("../controllers/post_controllers/edit_post_controller");
var _delete_post_controller = require("../controllers/post_controllers/delete_post_controller");
var _getAll_post_controller = require("../controllers/post_controllers/get_post_controllers/getAll_post_controller");
var _getUserPosts_controller = require("../controllers/post_controllers/get_post_controllers/getUserPosts_controller");
var _getSingle_post_controller = require("../controllers/post_controllers/get_post_controllers/getSingle_post_controller");
var _vote_post_controller = require("../controllers/post_controllers/vote_post_controller");
var _post_comment_controller = require("../controllers/post_controllers/comment_controllers/post_comment_controller");
var _reply_comment_controller = require("../controllers/post_controllers/comment_controllers/reply_comment_controller");
var _get_comment_controller = require("../controllers/post_controllers/comment_controllers/get_comment_controller");
var _getFilteredByCategory_post_controller = require("../controllers/post_controllers/getFiltered_post_controllers/getFilteredByCategory_post_controller");
var _getFilteredByTime_post_controller = require("../controllers/post_controllers/getFiltered_post_controllers/getFilteredByTime_post_controller");
var _getFilteredByUpvote_post_controller = require("../controllers/post_controllers/getFiltered_post_controllers/getFilteredByUpvote_post_controller");
var router = (0, _express.Router)();

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: User management
 *   - name: Post
 *     description: Post management
 *   - name: Comment
 *     description: Comment management
 *   - name: FilteredPosts
 *     description: Filtered posts management
 */

/**
 * @swagger
 * /register-user:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               profilePicture:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */
router.post('/register-user', _auth_controller.handleRegisterUser);

/**
 * @swagger
 * /login-user:
 *   post:
 *     summary: Login a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Invalid credentials
 */
router.post('/login-user', _login_controller.handleLogin);

/**
 * @swagger
 * /create-post:
 *   post:
 *     summary: Create a new post
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               category:
 *                 type: string
 *                 enum: ["Kidney", "Headache", "Stomachache", "Leg pain", "Malaria"]
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Bad request
 */
router.post('/create-post', _authenticate_user.AuthenticateUser, _create_post_controller.handleCreatePost);

/**
 * @swagger
 * /edit-post/{id}:
 *   patch:
 *     summary: Edit a post
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               category:
 *                 type: string
 *                 enum: ["Kidney", "Headache", "Stomachache", "Leg pain", "Malaria"]
 *     responses:
 *       200:
 *         description: Post edited successfully
 *       400:
 *         description: Bad request
 */
router.patch('/edit-post/:id', _authenticate_user.AuthenticateUser, _edit_post_controller.handleEditPost);

/**
 * @swagger
 * /delete-post/{id}:
 *   delete:
 *     summary: Delete a post
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       400:
 *         description: Bad request
 */
router["delete"]('/delete-post/:id', _authenticate_user.AuthenticateUser, _delete_post_controller.handleDeletePost);

/**
 * @swagger
 * /get-user-posts/{id}:
 *   get:
 *     summary: Get posts by user ID
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User posts retrieved successfully
 *       400:
 *         description: Bad request
 */
router.get('/get-user-posts/:id', _getUserPosts_controller.handleGetUserPosts);

/**
 * @swagger
 * /get-all-posts:
 *   get:
 *     summary: Get all posts
 *     tags: [Post]
 *     responses:
 *       200:
 *         description: All posts retrieved successfully
 */
router.get('/get-all-posts', _getAll_post_controller.handleGetAllPosts);

/**
 * @swagger
 * /get-single-post/{id}:
 *   get:
 *     summary: Get a single post by ID
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Single post retrieved successfully
 *       400:
 *         description: Bad request
 */
router.get('/get-single-post/:id', _getSingle_post_controller.handleGetSinglePost);

/**
 * @swagger
 * /add-votes/{id}:
 *   post:
 *     summary: Vote on a post
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               voteType:
 *                 type: string
 *                 enum: ["upvote", "downvote"]
 *                 description: Type of vote
 *     responses:
 *       200:
 *         description: Vote added successfully
 *       400:
 *         description: Bad request
 */
router.post('/add-votes/:id', _authenticate_user.AuthenticateUser, _vote_post_controller.handleVotePost);

/**
 * @swagger
 * /post-comment/{id}:
 *   post:
 *     summary: Post a comment
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comment posted successfully
 *       400:
 *         description: Bad request
 */
router.post('/post-comment/:id', _authenticate_user.AuthenticateUser, _post_comment_controller.handlePostComment);

/**
 * @swagger
 * /reply-comment/{id}:
 *   post:
 *     summary: Reply to a comment
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Reply posted successfully
 *       400:
 *         description: Bad request
 */
router.post('/reply-comment/:id', _authenticate_user.AuthenticateUser, _reply_comment_controller.handleReplyComment);

/**
 * @swagger
 * /get-comments/{id}:
 *   get:
 *     summary: Get comments for a post
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comments retrieved successfully
 *       400:
 *         description: Bad request
 */
router.get('/get-comments/:id', _get_comment_controller.handleGetCommentsForPost);

/**
 * @swagger
 * /get-filteredByCategory:
 *   get:
 *     summary: Get posts filtered by category
 *     tags: [FilteredPosts]
 *     parameters:
 *       - in: query
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: The category to filter posts by
 *     responses:
 *       200:
 *         description: Posts filtered by category retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   image:
 *                     type: string
 *                   content:
 *                     type: string
 *                   category:
 *                     type: string
 *       400:
 *         description: Bad request
 */
router.get('/get-filteredByCategory', _getFilteredByCategory_post_controller.handleGetPostsByCategory);

/**
 * @swagger
 * /get-filteredByTime:
 *   get:
 *     summary: Get posts filtered by time
 *     tags: [FilteredPosts]
 *     parameters:
 *       - in: query
 *         name: time
 *         required: true
 *         schema:
 *           type: string
 *         description: The time frame to filter posts by (e.g., 'last_week', 'last_month')
 *     responses:
 *       200:
 *         description: Posts filtered by time retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   image:
 *                     type: string
 *                   content:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       400:
 *         description: Bad request
 */
router.get('/get-filteredByTime', _getFilteredByTime_post_controller.handleGetPostsByTime);

/**
 * @swagger
 * /get-filteredByUpvotes:
 *   get:
 *     summary: Get posts filtered by upvotes
 *     tags: [FilteredPosts]
 *     parameters:
 *       - in: query
 *         name: minUpvotes
 *         required: true
 *         schema:
 *           type: integer
 *         description: The minimum number of upvotes to filter posts by
 *     responses:
 *       200:
 *         description: Posts filtered by upvotes retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   image:
 *                     type: string 
 *                   content:
 *                     type: string
 *                   upvotes:
 *                     type: integer
 *       400:
 *         description: Bad request
 */
router.get('/get-filteredByUpvotes', _getFilteredByUpvote_post_controller.handleGetPostsByUpvotes);
var _default = exports["default"] = router;
import { Router } from 'express';
import { AuthenticateUser } from '../middleware/authenticate_user';
import { handleRegisterUser } from '../controllers/auth_controllers/auth_controller';
import { handleLogin } from '../controllers/auth_controllers/login_controller';
import { handleCreatePost } from '../controllers/post_controllers/create_post_controller';
import { handleEditPost } from '../controllers/post_controllers/edit_post_controller';
import { handleDeletePost } from '../controllers/post_controllers/delete_post_controller';
import { handleGetAllPosts } from '../controllers/post_controllers/get_post_controllers/getAll_post_controller';
import { handleGetUserPosts } from '../controllers/post_controllers/get_post_controllers/getUserPosts_controller';
import { handleGetSinglePost } from '../controllers/post_controllers/get_post_controllers/getSingle_post_controller';
import { handleVotePost } from '../controllers/post_controllers/vote_post_controller';
import { handlePostComment } from '../controllers/post_controllers/comment_controllers/post_comment_controller';
import { handleReplyComment } from '../controllers/post_controllers/comment_controllers/reply_comment_controller';
import { handleGetCommentsForPost } from '../controllers/post_controllers/comment_controllers/get_comment_controller';
import { handleGetPostsByCategory } from '../controllers/post_controllers/getFiltered_post_controllers/getFilteredByCategory_post_controller';
import { handleGetPostsByTime } from '../controllers/post_controllers/getFiltered_post_controllers/getFilteredByTime_post_controller';
import { handleGetPostsByUpvotes } from '../controllers/post_controllers/getFiltered_post_controllers/getFilteredByUpvote_post_controller';

const router = Router();


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
router.post('/register-user', handleRegisterUser);

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
router.post('/login-user', handleLogin);

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
router.post('/create-post', AuthenticateUser, handleCreatePost);

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
router.patch('/edit-post/:id', AuthenticateUser, handleEditPost);

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
router.delete('/delete-post/:id', AuthenticateUser, handleDeletePost);

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
router.get('/get-user-posts/:id', handleGetUserPosts);

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
router.get('/get-all-posts', handleGetAllPosts);

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
router.get('/get-single-post/:id', handleGetSinglePost);

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
router.post('/add-votes/:id', AuthenticateUser, handleVotePost);

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
router.post('/post-comment/:id', AuthenticateUser, handlePostComment);

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
router.post('/reply-comment/:id', AuthenticateUser, handleReplyComment);

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
router.get('/get-comments/:id', handleGetCommentsForPost);

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
router.get('/get-filteredByCategory', handleGetPostsByCategory);

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
router.get('/get-filteredByTime', handleGetPostsByTime);

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
router.get('/get-filteredByUpvotes', handleGetPostsByUpvotes);

export default router;

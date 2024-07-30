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

router.post('/register-user', handleRegisterUser);

router.post('/login-user', handleLogin)

router.post('/create-post', AuthenticateUser, handleCreatePost)

router.patch('/edit-post/:id', AuthenticateUser, handleEditPost)

router.delete('/delete-post/:id', AuthenticateUser, handleDeletePost)

router.get('/get-user-posts/:id', handleGetUserPosts)

router.get('/get-all-posts', handleGetAllPosts)

router.get('/get-single-post/:id', handleGetSinglePost)

router.post('/add-votes/:id', AuthenticateUser, handleVotePost)

router.post('/post-comment/:id', AuthenticateUser, handlePostComment)

router.post('/reply-comment/:id', AuthenticateUser, handleReplyComment)

router.get('/get-comments/:id', handleGetCommentsForPost)

router.get('get-filteredByCategory', handleGetPostsByCategory)

router.get('get-filteredByTime', handleGetPostsByTime)

router.get('get-filteredByUpvotes', handleGetPostsByUpvotes)

export default router;

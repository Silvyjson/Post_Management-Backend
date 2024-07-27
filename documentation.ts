export const Documentation = `
<body style="font-family: Arial, sans-serif; margin: 20px; line-height: 1.6;">
<h1 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">Project Documentation</h1>

<div style="margin-bottom: 40px;">
    <h2 style="color: #333;">Overview</h2>
    <p>This project is a comprehensive platform for managing posts, comments, and user interactions. Built with Node.js, Express, and MongoDB, it includes functionalities for creating posts, adding comments, replying to comments, and filtering posts by categories, time, and upvotes. It supports user authentication and allows for dynamic interaction with posts through upvotes and downvotes.</p>
</div>

<div style="margin-bottom: 40px;">
    <b>ENDPOINT_URL: https://post-management-backend.onrender.com</b>
</div>

<div style="margin-bottom: 40px;">
    <h2 style="color: #333;">API Endpoints</h2>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">POST /api/register-user</h3>
        <p>Register a new user.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: POST
URL: /api/register-user

{
  "username": "John Doe",
  "email": "john.doe@example.com",
  "password": "Password123!",
  "profilePicture": "",
}
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">POST /api/login-user</h3>
        <p>Login a user.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: POST
URL: /api/login-user

{
  "email": "john.doe@example.com",
  "password": "Password123!"
}
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">POST /api/create-post</h3>
        <p>Create a new post. Authentication is required.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: POST
URL: /api/create-post

BODY:
{
  "image": "URL to the image",
  "content": "Post content here",
  "category": "Kidney|Headache|Stomachache|Leg pain|Malaria"
}
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">PATCH /api/edit-post/:id</h3>
        <p>Edit an existing post. Authentication is required.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: PATCH
URL: /api/edit-post/:id

BODY:
{
  "image": "Updated URL to the image",
  "content": "Updated post content",
  "category": "Kidney|Headache|Stomachache|Leg pain|Malaria"
}
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">DELETE /api/delete-post</h3>
        <p>Delete a post. Authentication is required.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: DELETE
URL: /api/delete-post

BODY:
{
  "postId": "ID of the post to be deleted"
}
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">GET /api/get-user-posts/:id</h3>
        <p>Retrieve all posts created by a specific user.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: GET
URL: /api/get-user-posts/:id
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">GET /api/get-all-posts</h3>
        <p>Retrieve all posts.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: GET
URL: /api/get-all-posts
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">GET /api/get-single-post/:id</h3>
        <p>Retrieve a specific post with its comments and replies.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: GET
URL: /api/get-single-post/:id
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">POST /api/add-votes/:id</h3>
        <p>Add upvotes or downvotes to a post. Authentication is required.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: POST
URL: /api/add-votes/:id

BODY:
{
  "voteType": "upvote|downvote"
}
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">POST /api/post-comment/:id</h3>
        <p>Add a comment to a post. Authentication is required.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: POST
URL: /api/post-comment/:id

BODY:
{
  "comment": "This is a comment"
}
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">POST /api/reply-comment/:id</h3>
        <p>Add a reply to a comment. Authentication is required.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: POST
URL: /api/reply-comment/:id

BODY:
{
  "comment": "This is a reply"
}
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">GET /api/get-comments/:id</h3>
        <p>Retrieve all comments for a specific post.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: GET
URL: /api/get-comments/:id
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">GET /api/get-filteredByCategory</h3>
        <p>Retrieve posts filtered by category.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: GET
URL: /api/get-filteredByCategory

QUERY PARAMETERS:
- category: Kidney|Headache|Stomachache|Leg pain|Malaria
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">GET /api/get-filteredByTime</h3>
        <p>Retrieve posts filtered by time.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: GET
URL: /api/get-filteredByTime

QUERY PARAMETERS:
- startDate: Start date in ISO format
- endDate: End date in ISO format
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">GET /api/get-filteredByUpvotes</h3>
        <p>Retrieve posts filtered by upvotes.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: GET
URL: /api/get-filteredByUpvotes

QUERY PARAMETERS:
- minVotes: Minimum number of upvotes
</code>
</pre>
    </div>
</div>
</body>

`
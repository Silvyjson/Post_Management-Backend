export const Documentation = `
<body style="font-family: Arial, sans-serif; margin: 20px; line-height: 1.6;">
<h1 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">Project Documentation</h1>

<div style="margin-bottom: 40px;">
    <h2 style="color: #333;">Overview</h2>
    <p>This project is a comprehensive platform for managing posts, comments, and user interactions. Built with Node.js, Express, and MongoDB, it includes functionalities for creating posts, adding comments, replying to comments, and filtering posts by categories. It supports user authentication and allows for dynamic interaction with posts through upvotes and downvotes.</p>
</div>

<div style="margin-bottom: 40px;">
    <b>ENDPOINT_URL: https://backend-youthrive-post-management.onrender.com</b>
</div>

<div style="margin-bottom: 40px;">
    <h2 style="color: #333;">API Endpoints</h2>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">POST /api/posts</h3>
        <p>Create a new post.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: POST
URL: /api/posts

{
  "image": "URL to the image",
  "content": "Post content here",
  "category": "Kidney|Headache|Stomachache|Leg pain|Malaria"
}
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">GET /api/posts</h3>
        <p>Retrieve posts with optional category filtering and sorting.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: GET
URL: /api/posts

QUERY PARAMETERS:
- category: Kidney|Headache|Stomachache|Leg pain|Malaria
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">POST /api/posts/:postId/comments</h3>
        <p>Add a comment to a post.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: POST
URL: /api/posts/:postId/comments

BODY:
{
  "comment": "This is a comment"
}
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">POST /api/posts/:postId/comments/:commentId/reply</h3>
        <p>Add a reply to a comment.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: POST
URL: /api/posts/:postId/comments/:commentId/reply

BODY:
{
  "comment": "This is a reply"
}
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">GET /api/posts/:id/comments</h3>
        <p>Retrieve all comments for a specific post.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: GET
URL: /api/posts/:id/comments
</code>
</pre>
    </div>

    <div style="background-color: #e8e8e8; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #333;">GET /api/posts/:id</h3>
        <p>Retrieve a specific post with its comments and replies.</p>
<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;">
<code style="font-size: 0.8rem;">
METHOD: GET
URL: /api/posts/:id
</code>
</pre>
    </div>
</div>
</body>
`
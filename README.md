Post manager

Description

A Node.js and Express application for managing posts and comments. Users can create, view, and filter posts by category, and comment on posts with replies. This application also includes user authentication and role-based access control.

Table of Contents

- [Installation](installation)
- [Usage](usage)
- [API Endpoints](api-endpoints)
  - [Posts](posts)
  - [Comments](comments)
  - [Users](users)
- [Environment Variables](environment-variables)
- [Testing](testing)
- [Contributing](contributing)
- [License](license)

url: https://post-management-backend.onrender.com

Installation

1. Clone the Repository

   ```bash
   git clone https://github.com/Silvyjson/Post_Management-Backend.git
   cd project-name
   ```

2. Install Dependencies

   ```bash
   npm install
   ```

3. Setup Environment Variables

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=your_port_number
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Run Migrations

   If you have any database migrations, run them:

   ```bash
   npm run migrate
   ```

5. Start the Server

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000` by default.

Usage

1. Create a User

   - Endpoint: `POST /api/users/register`
   - Body: `{ "username": "string", "email": "string", "password": "string" }`
   - Description: Register a new user.

2. Login

   - Endpoint: `POST /api/users/login`
   - Body: `{ "email": "string", "password": "string" }`
   - Description: Authenticate a user and get a JWT token.

3. Create a Post

   - Endpoint: `POST /api/posts`
   - Headers: `Authorization: Bearer <token>`
   - Body: `{ "image": "string", "content": "string", "category": "string" }`
   - Description: Create a new post.

4. Get Posts by Category

   - Endpoint: `GET /api/get-filteredByCategory`
   - Query Parameters: `category=Kidney|Headache|Stomachache|Leg pain|Malaria`
   - Description: Retrieve posts filtered by category and sorted by custom order.

5. Get Comments for a Post

   - Endpoint: `GET /api/posts/:id/comments`
   - Description: Retrieve all comments for a specific post.

6. Add a Comment

   - Endpoint: `POST /api/posts/:postId/comments`
   - Headers: `Authorization: Bearer <token>`
   - Body: `{ "comment": "string" }`
   - Description: Add a comment to a post.

7. Reply to a Comment

   - Endpoint: `POST /api/posts/:postId/comments/:commentId/reply`
   - Headers: `Authorization: Bearer <token>`
   - Body: `{ "comment": "string" }`
   - Description: Reply to a specific comment.

API Endpoints

Posts

- Create a Post

  - Method: POST
  - URL: `/api/posts`
  - Body: `{ "image": "string", "content": "string", "category": "string" }`
  - Authentication: Required

- Get Posts by Category
  - Method: GET
  - URL: `/api/get-filteredByCategory`
  - Query Parameters: `category=Kidney|Headache|Stomachache|Leg pain|Malaria`

Comments

- Get Comments for a Post
  - Method: GET
  - URL: `/api/posts/:id/comments`
- Add a Comment

  - Method: POST
  - URL: `/api/posts/:postId/comments`
  - Body: `{ "comment": "string" }`
  - Authentication: Required

- Reply to a Comment
  - Method: POST
  - URL: `/api/posts/:postId/comments/:commentId/reply`
  - Body: `{ "comment": "string" }`
  - Authentication: Required

Users

- Register a User

  - Method: POST
  - URL: `/api/users/register`
  - Body: `{ "username": "string", "email": "string", "password": "string" }`

- Login
  - Method: POST
  - URL: `/api/users/login`
  - Body: `{ "email": "string", "password": "string" }`

Environment Variables

- MONGO_URI: Your MongoDB connection string.
- JWT_SECRET: Secret key for JWT authentication.

Testing

1. Run Tests

   Ensure you have a test environment setup, then run:

   ```bash
   npm test
   ```

2. End-to-End Testing

   You can use tools like Postman or automated testing frameworks like Mocha/Chai for API testing.

Contributing

1. Fork the Repository

   Click the "Fork" button on the top right of the repository page.

2. Clone Your Fork

   ```bash
   git clone https://github.com/Silvyjson/Post_Management-Backend.git
   ```

3. Create a New Branch

   ```bash
   git checkout -b feature/your-feature
   ```

4. Make Your Changes

5. Commit Your Changes

   ```bash
   git add .
   git commit -m "Add a descriptive message"
   ```

6. Push to Your Fork

   ```bash
   git push origin feature/your-feature
   ```

7. Create a Pull Request

   Go to the original repository and create a pull request.

License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

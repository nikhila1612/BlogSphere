# BlogSphere 🌐

## Overview
BlogSphere is a simple blogging platform created using Node.js, Express, and MongoDB. It allows users to create, read, update, and delete blog posts. The platform also includes features for user registration, authentication, and basic contact functionality.

## Features
- **User Authentication**: Users can register and log in to access the admin dashboard.
- **Admin Dashboard**: Authenticated users can access a dashboard to manage blog posts, including creating, editing, and deleting posts.
- **Blog Posts**: Users can view a list of blog posts, read individual posts, and search for posts using keywords.
- **Contact Form**: Users can submit a contact form with their name, email, and message, which is stored in the database.

## Screenshots
![blogsphere1](https://github.com/nikhila1612/BlogSphere/assets/84263617/0a0b4951-4be5-4e83-ab66-b70ab23784bc)
![blogsphere2](https://github.com/nikhila1612/BlogSphere/assets/84263617/ea597ffb-c1b9-4bac-99dc-81544b326a04)
![blogsphere3](https://github.com/nikhila1612/BlogSphere/assets/84263617/8eaebbc6-d7bd-47e0-9c5f-b1856a1d8a6d)
![blogsphere4](https://github.com/nikhila1612/BlogSphere/assets/84263617/d7f757fb-b2ef-44b8-8331-291a12f994f3)


## Installation
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd blogsphere`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root directory and define the following environment variables:
   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret-key>
   ```
5. Start the server: `npm start`

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database used for storing blog posts and user information.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **EJS**: Embedded JavaScript templating engine for generating HTML markup.
- **bcrypt**: Library for hashing passwords securely.
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens for user authentication.
- **dotenv**: Module for loading environment variables from a `.env` file.
- **express-session**: Middleware for managing user sessions in Express.
- **connect-mongo**: MongoDB session store for Express sessions.
- **method-override**: Middleware for overriding HTTP methods to support PUT and DELETE requests.


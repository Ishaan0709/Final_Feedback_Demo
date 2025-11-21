# EchoForge Backend API

Backend API for EchoForge - A feedback and survey platform with role-based authentication.

## Features

- ✅ Role-based authentication (Student, Teacher, Society)
- ✅ Email validation against seeded collections
- ✅ JWT-based token authentication
- ✅ Protected dashboard routes
- ✅ Password hashing with bcrypt

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the Backend directory:

```env
MONGO_URI=mongodb://localhost:27017/feedback-demo
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=30d
PORT=5000
NODE_ENV=development
```

### 3. Database Collections

Ensure your MongoDB database (`feedback-demo`) has three collections with authorized emails:

- `students` - Contains student emails (each document: `{ email: "student@example.edu" }`)
- `teachers` - Contains teacher emails (each document: `{ email: "teacher@example.edu" }`)
- `societies` - Contains society emails (each document: `{ email: "society@example.edu" }`)

**Note:** You can manually add emails to these collections via MongoDB Atlas or use the seed script if needed. The authentication system will check these collections directly.

### 4. Start the Server

Development mode (with nodemon):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000` (or the PORT specified in .env)

## API Endpoints

### Authentication Routes

#### 1. Sign Up
**POST** `/api/auth/signup`

Register a new user. Email must exist in the appropriate seeded collection.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "sgupta1_be23@thapar.edu",
  "password": "password123",
  "role": "student"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "sgupta1_be23@thapar.edu",
      "role": "student"
    },
    "token": "jwt_token_here"
  }
}
```

#### 2. Login
**POST** `/api/auth/login`

Login with email and password.

**Request Body:**
```json
{
  "email": "sgupta1_be23@thapar.edu",
  "password": "password123",
  "role": "student"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "sgupta1_be23@thapar.edu",
      "role": "student"
    },
    "token": "jwt_token_here"
  }
}
```

#### 3. Get Current User
**GET** `/api/auth/me`

Get the currently authenticated user.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "sgupta1_be23@thapar.edu",
      "role": "student"
    }
  }
}
```

#### 4. Verify Token
**POST** `/api/auth/verify`

Verify if a token is valid.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "sgupta1_be23@thapar.edu",
      "role": "student"
    }
  }
}
```

### Dashboard Routes

All dashboard routes require authentication and role-based authorization.

#### 1. Student Dashboard
**GET** `/api/dashboard/student`

Accessible only by users with `student` role.

**Headers:**
```
Authorization: Bearer <token>
```

#### 2. Teacher Dashboard
**GET** `/api/dashboard/teacher`

Accessible only by users with `teacher` role.

**Headers:**
```
Authorization: Bearer <token>
```

#### 3. Society Dashboard
**GET** `/api/dashboard/society`

Accessible only by users with `society` role.

**Headers:**
```
Authorization: Bearer <token>
```

## Email Validation

The system validates that:
1. The email exists in the appropriate database collection (`students`, `teachers`, or `societies`)
2. The role matches the collection the email belongs to
3. Only emails that exist in the database collections can register/login

**Note:** The email validation checks against the actual MongoDB collections in your `feedback-demo` database, not against any seed file. Make sure your collections (`students`, `teachers`, `societies`) are populated with the authorized emails.

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Please provide all required fields"
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "message": "Email 'xxx@example.com' is not authorized for student role"
}
```

### 500 Server Error
```json
{
  "success": false,
  "message": "Server error",
  "error": "Error details (in development mode)"
}
```

## Security Features

- Passwords are hashed using bcrypt
- JWT tokens for stateless authentication
- Role-based access control
- Email validation against seeded collections
- Protected routes with middleware

## Testing with cURL

### Sign Up
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "sgupta1_be23@thapar.edu",
    "password": "password123",
    "role": "student"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "sgupta1_be23@thapar.edu",
    "password": "password123",
    "role": "student"
  }'
```

### Access Dashboard
```bash
curl -X GET http://localhost:5000/api/dashboard/student \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```


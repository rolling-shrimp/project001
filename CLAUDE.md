# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a music appreciation and composition course registration website built with React.js. The application allows users to browse and purchase music compositions, and enroll in music courses. The project features a separated frontend-backend architecture with authentication, course management, and user enrollment functionality.

## Project Structure

- **Frontend**: React.js application located in `/music/` directory
- **Backend**: Node.js/Express API server located in `/music/back_end_route/` directory
- **Database**: MongoDB with Mongoose ODM for data models

## Development Commands

### Frontend (music/)
- `npm start` - Start development server (runs on http://localhost:3000)
- `npm run build` - Build for production
- `npm test` - Run test suite

### Backend (music/back_end_route/)
- `npm start` - Start Node.js server (runs on port 3502)
- `npm run build` - Install dependencies

## Architecture Overview

### Backend Architecture
- **Entry Point**: `config.js` - Main server configuration and middleware setup
- **Models**: `models/models.js` - MongoDB schemas for User and Course collections
- **Middleware**: `middlewear/` directory containing:
  - `auth.js` - Authentication routes (signup, login)
  - `loginauth.js` - Protected routes for course management
  - `passport.js` - JWT passport strategy
  - `comparePassword.js` - Password comparison utilities
  - `validation.js` - Input validation middleware

### Frontend Architecture
- **Main App**: `src/App.js` - Router setup and global state management
- **Pages**: `src/pages/` - Main page components (Homepage, MuCourse, TeacherPage, etc.)
- **Components**: `src/components/` - Reusable UI components and services
- **Services**: Authentication service and API communication utilities
- **Styling**: SCSS files in `src/components/styles/` with CSS compilation

### Authentication Flow
- JWT-based authentication with localStorage storage
- User roles: "student" and "instructor"
- Protected routes using passport-jwt middleware
- Password hashing with bcrypt

### API Endpoints
- **Public**: `/courses` - Get all courses
- **Auth**: `/api/account/` - Registration and login
- **Protected**: `/api/member/` - Course management, enrollment, user-specific data

### Database Models
- **User Model**: name, mail, phone, account, password, role
- **Course Model**: title, description, price, date, place, students array

## Key Features
- User registration and authentication
- Course creation and management (instructors)
- Course enrollment and cancellation (students)
- Music player functionality
- Responsive design with Bootstrap and custom SCSS
- Bilingual support (English/Chinese)

## Environment Requirements
- Node.js environment variables in `.env` file:
  - `DB_Connect` - MongoDB connection string
  - `SECRET` - JWT secret key
- Frontend runs on port 3000
- Backend runs on port 3502
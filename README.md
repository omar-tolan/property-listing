# 🏠 Property Listing Project
A web app for viewing property listings.

## 📚 Table of Contents
- [Running the app locally](#running-the-app-locally)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Error Handling](#api-error-handling)
- [Logging](#logging)

---


## 🚀 Running the app locally
### Prerequisites:
Make sure you have the following installed on your machine:
- Docker :
  - [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose
  - [Install Docker Compose](https://docs.docker.com/compose/install/)

### Getting Started
1. Clone the repository
```bash
git clone https://github.com/omar-tolan/property-listing.git
```
3. cd into the project directory
```bash
cd property-listing
```
5. Build and start the project containers
```bash
docker-compose up --build
```
7. Access the app
- The app will be available at **http://localhost:3000**
- Swagger API Documentation will be available at **http://localhost:3333/api-docs**

 ---


## 📁 Project Structure
```
├── client/                       # NextJS application
│   ├── public/                   # Static files 
│   ├── src/
│   │   ├── app/                  # Next.js app router
│   │   │   ├── layout.tsx        # Root layout
│   │   │   └── page.tsx          # Home page
│   │   ├── ui/                   # All react components
│   │   ├── data/                 # Data fetching functions
│   │   ├── core/                 # All react components
│   |   │   ├── types/            # Core Type definitions
│   |   │   ├── api-error.ts      # ApiError class for error handling
│   |   │   ├── utils/            # Utility functions
│   |   │   ├── config/           # API Configuration
│   ├── .dockerignore
│   ├── Dockerfile
│   ├── next.config.ts
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
├── server/                       # Backend Express application
│   ├── src/
│   │   ├── config/               # Configuration files
│   │   │   ├── db.ts             # Database configuration
│   │   │   └── swagger.ts        # Swagger configuration
│   │   ├── controllers/          # Request handlers
│   │   ├── core/                 # Core utilities
│   │   │   └── api-error.ts      # ApiError class for handling errors
│   │   ├── data/                 # Seed data
│   │   ├── models/               # MongoDB schemas
│   │   ├── routes/               # API routes
│   │   │   └── listings.ts
│   │   ├── tests/                # Test files
│   │   ├── utils/                # Utility functions
│   │   ├── app.ts                # Express app setup
│   │   └── index.ts              # Entry point
│   ├── .dockerignore
│   ├── Dockerfile
│   ├── jest.config.js
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── docker-compose.yml
```
---

## ⚠️ API Error Handling

The API uses standardized error responses:

- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error

- Server errors are caught using Express ErrorHandler middleware
- Errors are handled centrally using a custom APIError class

---

## 📄 Logging

Winston logger is configured for:
- Console and File outputs
- Error tracking

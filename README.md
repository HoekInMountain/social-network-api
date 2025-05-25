# 📱 Social Network API

## Description

This is a backend API built for a social media startup that needs a fast and scalable way to manage unstructured data such as users, thoughts, reactions, and friendships. The application uses **MongoDB** as a NoSQL database, along with **Mongoose** for schema modeling, and **Express.js** for building the RESTful API.

The API supports full **CRUD** operations for users and thoughts, as well as functionality to manage **reactions** and **friends**.


## 📹 Demo Video  
👉 [Demo Video Link](https://drive.google.com/file/d/1uQHypE4lU4sd5B_UPPGu7JaWhB7pJ-cK/view?usp=drive_link)

## 💡 User Story


## ✅ Acceptance Criteria

- ✅ **When** the app is started, the Express server launches and Mongoose connects to MongoDB.
- ✅ **When** API GET routes are tested in Insomnia for users and thoughts, data is returned in formatted JSON.
- ✅ **When** API POST, PUT, and DELETE routes are tested, users and thoughts can be created, updated, or deleted.
- ✅ **When** API POST and DELETE routes for reactions and friendships are tested, reactions can be added or removed from thoughts, and friends can be added or removed from a user's friend list.

---

## 🔧 Technologies Used

- MongoDB + Mongoose (NoSQL database)
- Express.js (Node.js framework)
- JavaScript (ES6+)
- Dotenv (for environment variables)
- Insomnia (for API testing)

---

## 📁 API Routes

### Users

- `GET /api/users` — Get all users  
- `GET /api/users/:id` — Get a single user by ID  
- `POST /api/users` — Create a new user  
- `PUT /api/users/:id` — Update a user  
- `DELETE /api/users/:id` — Delete a user  

### Thoughts

- `GET /api/thoughts` — Get all thoughts  
- `GET /api/thoughts/:id` — Get a single thought  
- `POST /api/thoughts` — Create a new thought  
- `PUT /api/thoughts/:id` — Update a thought  
- `DELETE /api/thoughts/:id` — Delete a thought  

### Reactions

- `POST /api/thoughts/:thoughtId/reactions` — Add a reaction  
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` — Remove a reaction  

### Friends

- `POST /api/users/:userId/friends/:friendId` — Add a friend  
- `DELETE /api/users/:userId/friends/:friendId` — Remove a friend  

---

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/HoekInMountain/social-network-api.git
cd social-network-api
npm install



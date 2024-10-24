# Education Management App

An Education Management System built with React, Node.js, Express, and MongoDB. This application allows admin to add, edit, and delete class, they handle all permision to teacher and student, allows teacher show student and class and attentends , user show grad or your work.

## Features

- User Authentication using role based authenticate
- Admin allow add students and teacher, asign teacher in classes,asign students in teacher, handle all permisions.
- Teacher allow attendance student and show their students or classes and work grad any students.
- Student allow view our classes and teacher and show his grad or works.
- Admin dashboard, Teacher dashboard, Student dashbord.
- all in one School Mangment System handle any school app.

## Technologies Used

- **Frontend:** React, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** Role-Based Authentication
- **CSS Framework:** Material UI

## Environment Variables

Before running the application, set up the following environment variables :-

  MONGO_URL = your db link

  PORT = 5000


## Getting Started

### Clone the Repository

```bash
git clone https://github.com/rakeshmakvana/Education-Management-App
```

## Frontend Setup

```bash
cd frontend
```

```bash
npm install
```

```bash
npm start
```

## Backend Setup

```bash
cd backend
```

```bash
npm install
```

```bash
npm start
```

## URLs

Frontend URL: http://localhost:3000

Backend URL: http://localhost:5000

## Usage

The Education Management System (EMS) is a robust web application designed to facilitate the management of educational activities through three distinct user
roles: Admin, Teacher, and Student. The Admin role possesses full privileges to add and manage both Teachers and Students, allowing them to create and organize classes, 
assign teachers to specific classes, and oversee student enrollments. Admins can perform CRUD (Create, Read, Update, Delete) operations on all entities within the system. 
Teachers have the capability to manage their own classes and students, which includes taking attendance, grading students, and providing feedback on their performance. 
They can access detailed views of their assigned students and classes while having the ability to update attendance records and submit grades. Students, on the other hand, 
have a limited view that allows them to monitor their own academic progress, view grades, and access class materials. This role-based authentication ensures that each user 
interacts with the system according to their specific privileges, fostering an organized and efficient educational environment.

## Troubleshooting

If you encounter any issues while running the application, please ensure :-

You have set the correct environment variables.
The MongoDB Atlas connection string is correct and your IP is whitelisted.
Both frontend and backend servers are running without errors.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

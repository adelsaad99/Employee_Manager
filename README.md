# Employee Manager

A full-stack MERN application to manage employees. Users can add, edit, delete, and search employees with real-time suggestions.

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge)  
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)  
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge)  
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge)  
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white&style=for-the-badge)  
![CORS](https://img.shields.io/badge/CORS-000000?style=for-the-badge)  
![dotenv](https://img.shields.io/badge/dotenv-000000?logo=dotenv&logoColor=white&style=for-the-badge)  
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge)

## Features

- **Add Employees**: Add new employees with Full Name, Position, Department, and Email
- **Edit Employees**: Update existing employee information
- **Delete Employees**: Remove employees from the system
- **Smart Search**: Real-time search suggestions as you type
- **Inline Validation**: Form validation to ensure all required fields are filled
- **Duplicate Email Check**: Prevents adding employees with duplicate email addresses
- **Responsive UI**: Works well on desktop, tablet, and mobile devices

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <your-repo-link>
cd employee-manager

cd backend
npm install

cd ../frontend
npm install

Set up environment variables:

Create a .env file in the backend folder

Add the following variables:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/employee_manager
NODE_ENV=development

cd backend
npm start

cd frontend
npm start

## 📂 Folder Structure
Employee_Manager/
├── backend/
│   ├── models/Employee.js
│   ├── routes/employees.js
│   ├── routes/search.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/EmployeeForm.js
│   │   ├── components/EmployeeTable.js
│   │   ├── services/api.js
│   │   └── styles/EmployeeForm.css
│   └── package.json
└── README.md

---
## 📷 Preview
https://./frontend/src/assets/demo-screenshot.png

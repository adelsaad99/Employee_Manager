<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="React" width="80" height="60"/>
  <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge" alt="Node.js" width="80" height="60"/>
  <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge" alt="Express" width="80" height="60"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge" alt="MongoDB" width="80" height="60"/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white&style=for-the-badge" alt="Axios" width="80" height="60"/>
  <img src="https://img.shields.io/badge/CORS-000000?style=for-the-badge" alt="CORS" width="80" height="60"/>
  <img src="https://img.shields.io/badge/dotenv-000000?logo=dotenv&logoColor=white&style=for-the-badge" alt="dotenv" width="80" height="60"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge" alt="CSS3" width="80" height="60"/>
</p>

# 🧑‍💼 Employee Manager  
**MERN Stack (MongoDB, Express, React, Node.js)**  

A full-stack MERN application that allows users to **add, edit, delete, and search employees** with real-time suggestions.  
Users can manage employees efficiently with inline validation and duplicate email checks.  

---

### ⚡ Features  
- ➕ **Add Employees**: Add new employees with Full Name, Position, Department, and Email.  
- ✏️ **Edit Employees**: Update existing employee information.  
- ❌ **Delete Employees**: Remove employees from the system.  
- 🔍 **Smart Search**: Real-time search suggestions as you type.  
- ✅ **Inline Validation**: Form validation to ensure all required fields are filled.  
- ⚠️ **Duplicate Email Check**: Prevents adding employees with duplicate email addresses.  
- 📱 **Responsive UI**: Works well on desktop, tablet, and mobile devices.  

---

### 🛠️ Technologies Used  
- ⚛️ **React**  
- 🌐 **Node.js & Express**  
- 🗄️ **MongoDB**  
- 📡 **Axios & CORS**  
- 🎨 **CSS3**  
- 🔑 **dotenv**  

---

## 💻 Installation & Demo

git clone <your-repo-link>  
cd employee-manager  

**Install backend dependencies:**  
cd backend  
npm install  

**Install frontend dependencies:**  
cd ../frontend  
npm install  

**Create `.env` file inside backend folder with:**  
PORT=5000  
MONGODB_URI=mongodb://localhost:27017/employee_manager  
NODE_ENV=development  

**Start the backend:**  
cd backend  
npm start  

**Start the frontend:**  
cd frontend  
npm start  

<p align="center">
  <img src="./frontend/demo-screenshot.png" alt="Employee Manager Demo" width="800"/>
</p>

---

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

# 🚗 Car Rental System  

## 📌 Project Overview  
The **Car Rental System** is a full-stack web application that allows **customers** to search and book rental cars while giving **admins** full control over car listings and booking approvals. 

This system provides authentication, car management, and booking functionalities using **Angular 16** for the frontend and **Spring Boot** for the backend, with **MySQL** as the database.  

---

## 🛠️ Tech Stack  
### **Frontend:**  
- ⚡ **Angular 16** (Dynamic UI, Component-Based Architecture)  

### **Backend:**  
- 🚀 **Spring Boot** (RESTful APIs, Business Logic)  
- 🛡️ **Spring Security** (Authentication & Authorization)  
- 📦 **Spring Data JPA** (Database Interaction)  
- 🔄 **Lombok** (Reduces Boilerplate Code)  
- ⚙️ **MySQL Driver** (Database Connectivity)
- 🔐 **JSON Web Token(JWT)** (Authentication)

### **Database:**  
- 🗄️ **MySQL** (Relational Data Storage)  

---

## 🎯 Features  
### **🔑 Authentication & Authorization**  
- Secure **Login & Signup** for **Admin** and **Customer**
- JWT-based authentication for secure access
- Role-based access control using **Spring Security**  

### **👨‍💼 Admin Panel**  
✅ **Manage Cars**  
- Add new car listings  
- Update existing car details  
- Delete cars from inventory  
- View all cars posted  

🔍 **Search Cars**  
- Filter cars based on **color, type, brand, etc.**  

📋 **Booking Management**  
- View all customer bookings  
- Accept or Reject booking requests  
- Control booking status (**Pending → Accepted/Rejected**)  

### **🧑‍💻 Customer Dashboard**  
🔍 **Search & View Cars**  
- Explore available cars posted by the **Admin**  
- Filter cars based on **color, type, brand, etc.**  

📝 **Book a Car**  
- Request booking for a car  
- View booking status (**Pending/Accepted/Rejected**)  

📜 **Booking History**  
- Customers can view all their previous and current bookings  
- Both **Admin and Customer** can track bookings  

---

## 🚀 Installation & Setup  
### **🔹 Backend Setup (Spring Boot)**  
1️⃣ Clone the repository:  
   ```sh
   git clone https://github.com/yourusername/Car_Rental_System.git
   cd Car_Rental_System
   ```  
2️⃣ Install dependencies:  
   ```sh
   mvn clean install
   ```  
3️⃣ Configure **MySQL Database** in `application.properties`:  
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/car_rental_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   spring.security.jwt.secret=your_secret_key
   ```  
4️⃣ Run the Spring Boot application:  
   ```sh
   mvn spring-boot:run
   ```  

### **🔹 Frontend Setup (Angular 16)**  
1️⃣ Navigate to the frontend directory:  
   ```sh
   cd frontend
   ```  
2️⃣ Install dependencies:  
   ```sh
   npm install
   ```  
3️⃣ Run the Angular development server:  
   ```sh
   ng serve --open
   ```  
4️⃣ Open in browser:  
   ```
   http://localhost:4200
   ```

---

## 📌 API Endpoints
### **🔑 Authentication**
- `POST /api/auth/signup` → Register new user
- `POST /api/auth/login` → Authenticate user & return JWT token

### **🚘 Car Management (Admin)**
- `POST /api/cars` → Add a new car
- `PUT /api/cars/{id}` → Update car details
- `DELETE /api/cars/{id}` → Delete a car
- `GET /api/cars` → Get all cars
- `GET /api/cars/search?brand=xyz` → Search cars by brand, color, type

### **📅 Booking Management**
- `POST /api/bookings` → Request car booking (Customer)
- `GET /api/bookings` → View all bookings (Admin & Customer)
- `PUT /api/bookings/{id}/status` → Update booking status (Admin: Accept/Reject)

## 🛡️ Security & Authentication
- **JWT-based authentication** ensures secure access.
- **Spring Security** protects sensitive endpoints.
- **Role-based access control** restricts functionalities.

---

## 📸 Screenshots (Optional)  

**LOGIN**
![login](https://github.com/user-attachments/assets/c11184dc-9c14-4645-a70a-f905568f4972)


**SIGNUP**
![signup](https://github.com/user-attachments/assets/366c44c0-fa92-4b44-8c02-e5258d123dcc)


**ADMIN-DASHBOARD**
![admin-dashboard](https://github.com/user-attachments/assets/4ae5b067-9325-43d9-84ce-7a21ba967be8)


**UPDATE**
![updatecar](https://github.com/user-attachments/assets/1fbe0b2d-f7d1-4707-a393-fd0e314aef1b)


**POST A CAR**
![post-car](https://github.com/user-attachments/assets/c3db059a-8742-4944-908f-5f13cfdb2803)


**VIEW-BOOKINGS(ADMIN)**
![admin-bookings](https://github.com/user-attachments/assets/d3d9cca5-3c17-4007-b4b5-0b77239e2541)


**CUSTOMER-DASHBOARD**
![customer-dashboard](https://github.com/user-attachments/assets/29146799-1ec7-4b39-a5bf-d1964ec6b697)


**BOOK A CAR**
![bookacar](https://github.com/user-attachments/assets/3c111382-4738-4fd4-ab78-0444adb5dd93)


**VIEW-BOOKINGS(CUSTOMER)**
![customer-bookings](https://github.com/user-attachments/assets/b238743f-ec05-4337-a8ae-6267ee8ddaf6)


**SEARCH(admin/customer)**
![search](https://github.com/user-attachments/assets/5dba7fde-709a-49cd-ad2e-4bfabd7afb80)

---

## 🎯 Future Enhancements  
- 📅 Implement **car availability calendar**  
- 📊 Add **analytics & reports** for admin  
- 🛒 Introduce **payment gateway** for bookings  

---

## 💡 Contributing  
Contributions are welcome! If you'd like to improve the project:  
1. Fork the repo  
2. Create a new branch (`feature-new`)  
3. Commit changes and push  
4. Create a **Pull Request**  

---
🚀 **Happy Coding!** 💻🎯

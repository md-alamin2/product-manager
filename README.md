# 📱 Product Manager

A simple product management app built with **Next.js 15 (App Router)**, **NextAuth.js**, **MongoDB (native driver)**, **Tailwind CSS**, and **shadcn/ui**.  
Includes public and protected pages with authentication and product CRUD.

---

## 🚀 Features

- Public Landing Page: Navbar, Hero, Product Highlights, Footer  
- Login via NextAuth (Google / Credentials)  
- Product List & Product Details (public)  
- Protected Add Product page (requires login)  
- Data stored in MongoDB (native driver)  
- Modern UI with Tailwind CSS + shadcn/ui  
- loading spinner, toast notifications, theme toggle  

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/md-alamin2/product-manager.git
cd product-manager
```

### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Configure Environment Variables
```bash
# MongoDB
MONGO_URI=your-mongodb-connection-uri
DB_NAME=your-database-name
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# NextAuth
NEXTAUTH_SECRET=your-random-secret

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```
### 4️⃣ Run the Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

---

## 🛣️ Route Summary
### 🌐 Public Pages

- Landing page
- login — Login page (Google / Credentials)
- products — Product list
- products/[id] — Product details

### 🔒 Protected Page

- /dashboard/add-product — Add Product form (login required)

### ⚡ API Routes

- GET /api/products — Fetch all products
- POST /api/products — Add product { name, description, price }
- GET /api/products/[id] — Fetch single product by ID
---

## 📦 Tech Stack

- Next.js 15 (App Router)
- NextAuth.js for authentication
- MongoDB (native driver)
- Tailwind CSS + shadcn/ui for styling
- Route Handlers (/api) for backend logic
---

## 👨‍💻 Developer

**Md. Alamin**  
Email: [mdalamin22671@gmail.com]()  
GitHub: [https://github.com/md-alamin2](https://github.com/md-alamin2)

---

## 📎 License

This project is open source and free to use for learning and portfolio purposes.
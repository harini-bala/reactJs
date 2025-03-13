# Library Management System

## Level 0 (Context Diagram) - Outline
The Level 0 DFD (Context Diagram) represents the Library Management System as a single process interacting with external entities.

### Entities & Data Flow in Level 0:
- **External Entities:**
  1. User (Registers, Logs in, Browses Books, Purchases, Borrows)
  2. Admin (Manages Books, Views User History)
- **Main System:**
  - Library Management System
- **Data Flow:**
  0. User → Sign Up/Login → Library System
  1. User → View Books → Library System
  2. User → Borrow/Purchase Book → Library System
  3. Admin → Add/Delete Books → Library System
  4. Library System → Store/Retrieve Data → MongoDB

### DFD Structure (Level 0)
```
+---------------------------+
|   External Entity: User   |
+---------------------------+

+---------------------------+
|   Library Management System |
+---------------------------+

+---------------------------+
|   External Entity: Admin |
+---------------------------+

+---------------------------+
|   Data Store: MongoDB     |
+---------------------------+
```

---

## Level 1 (Detailed DFD)
At Level 1, we break down the Library Management System into its major sub-processes.

### Processes & Data Flow in Level 1:

1. **User Registration & Authentication**
   - User signs up, and credentials are stored in MongoDB.
   - After signup, an alert confirms successful registration, and the user is redirected to the login page.
   - User logs in using registered credentials.
   - If credentials are invalid, an error message is displayed.
   - Upon successful login, the user is redirected to the book showcase.

2. **Admin Authentication & Management**
   - Admin logs in directly.
   - Admin accesses the Admin Dashboard to:
     - Add Books
     - Delete Books
   - Data is stored in MongoDB.

3. **Book Showcase & User Interaction**
   - After login, the user accesses the book showcase.
   - All book categories are displayed.
   - User can:
     - View book details
     - Add a book to the cart
     - Remove a book from the cart

4. **Book Purchase & Borrowing**
   - When the user purchases a book, the cart is updated, and the order is stored in MongoDB.
   - After payment, the user is redirected to the Products Page.

### DFD Structure (Level 1)
```
+-----------------------+                     +-----------------------+
|    External Entity    |                     |   External Entity    |
|         User         |                     |       Admin          |
+-----------------------+                     +-----------------------+
  
+-----------------------+                     +-----------------------+
| Process: 1.1 - Signup |                     | Process: 2.1 - Admin |
| Store in MongoDB    |                     |        Login         |
+-----------------------+                     +-----------------------+
  
+---------------------------+                  +-----------------------+
|             Show           |                  | Process: 2.2 - Manage|
| Signup Success Alert|                  |   Books & Users     |
+----------------------------+                  +----------------------------+
  
+----------------------------+                  +---------------------------+
|        Redirect        |                  |Data Store: MongoDB|
|     to Login Page       |                  |            Books              |
+----------------------------+                  +--------------------------------+
  
+----------------------------+
|       User               |
|   Enters Login Info |
+----------------------------+
  
+-----------------------+
| Process: 1.2 - Login |
| Validate User       |
+-----------------------+
  
+----------------------------------+
| Decision: Credentials Valid? |
+--------------------------------------------+
yes                                        No
+----------------------+   +----------------------+
|        Redirect         |   |            Show          |
| to Home Page       |   | Invalid Credentials |
+----------------------+   |    Alert Message    |
                                   +----------------------+
  
+-----------------------+                  
| Process: 1.3 - Browse |
| Books & Categories |
+-----------------------+
  
+-----------------------+
| Process: 1.4 - Add/ |
| Remove from Cart    |
+-----------------------+
  
+-----------------------+
| Process: 1.5 - Purchase |
| & Payment Processing |
+-----------------------+
  
+-----------------------+
| Redirect to Product |
|       Page          |
+-----------------------+
```

---

## Use Case Diagrams

### **Admin Dashboard**
  - Login
  - Add Books
  - Delete Books

```
+--------------------------------+
|          Admin                |
+--------------------------------+
  
[Login] [Add Book] [Delete Book]
```

### **User Signup & Login**
  - Register
  - Login
  - Redirect to Login if User Exists
  - Stay on Signup if New User
  - Redirect to Homepage After Successful Login

```
+--------------------------+
|          User           |
+--------------------------+
  
[Signup] [Login] [Redirect to Home]
```

### **Book Showcase & User Interaction**
  - Browse Books
  - Add to Cart
  - Remove from Cart
  - View Book Details

```
+--------------------------+
|          User           |
+--------------------------+
  
[Browse Books] [Add to Cart] [View Book Details]
```

### **Book Purchase**
  - Purchase Book
  - Return Book

```
+--------------------------+
|          User           |
+--------------------------+
  
 [Purchase]  [Return]
```

---

## Conclusion
This document provides:
- Level 0 & Level 1 DFD Diagrams
- Use Case Diagrams for Major Pages
- Data Flow and System Interaction Details

This serves as a blueprint for implementing a Library Management System using React, MongoDB, and Routing for authentication and book interactions.


# Login Form Application - Data Flow Diagram (DFD)

## Level 0: Context Diagram

At the highest level, the system consists of a **User** interacting with the **Login Form App** to authenticate credentials.

```plaintext
+-----------------------+
|  External Entity      |
|       (User)         |
+-----------------------+
          |
          v
+---------------------------+
|  Login Form Application   |
|     (React Frontend)      |
+---------------------------+
          |
          v
+---------------------------+
|  Data Store:              |
|  - State / API            |
|    (Authentication)       |
+---------------------------+
```

### Explanation:
- **External Entity (User):** The user enters their email and password and clicks the "Login" button.
- **Process (Login Form App):** The application validates the entered credentials, processes authentication, and updates the UI accordingly.
- **Data Store (State / API Authentication):**  
  - If using **local authentication**, credentials are compared with predefined values in state.  
  - If using **API-based authentication**, credentials are sent to a backend for validation.

---

## Level 1: Detailed Data Flow Diagram

Breaking down the **Login Form App** into its core processes:

```plaintext
+--------------------------+
|    External Entity       |
|         (User)          |
+--------------------------+
           |
           v
+--------------------------+
| Process: 1.1            |
| User Inputs Login       |
+--------------------------+
           |
           v
+--------------------------+
| Process: 1.2            |
| Validate Credentials    |
+--------------------------+
           |
           v
+--------------------------+
| Data Store: State / API |
|    (Authentication)     |
+--------------------------+
           |
           v
+--------------------------+
| Process: 1.3            |
| Display Response        |
+--------------------------+
```

### Explanation:
1. **Process 1.1 (User Inputs Login):**  
   - The user enters their **email** and **password** and clicks the "Login" button.  
   - React captures the input using `useState` hooks.  

2. **Process 1.2 (Validate Credentials):**  
   - If authentication is **API-based**, credentials are sent to an authentication API using `fetch()` or `axios`.  
   - If using **local authentication**, the credentials are checked against predefined values in the component state.  

3. **Data Store (State / API Authentication):**  
   - If the credentials are valid, the system updates the **state** or retrieves authentication success from the **API**.  

4. **Process 1.3 (Display Response):**  
   - If authentication is **successful**, an alert (`Login successful!`) is displayed.  
   - If authentication **fails**, an error message is shown to the user.  

---

This structured DFD can be saved as **`login-form-dfd.md`**. Let me know if you need any modifications! 🚀

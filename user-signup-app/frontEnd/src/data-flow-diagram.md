User Authentication System (Retail App):



This React and Node.js application provides a secure authentication system for a retail website, handling user registration, login, and access control to protected resources. It utilizes a MySQL database to store user credentials and manage session data.
Level 0 DFD (Context Diagram):
+-----------------------+
|  External Entities    |
|                                |
|   - User                   |
+-----------------------+
          |
          v
+------------------------+
| Authentication System |
| (React + Node.js)     |
+------------------------+
          |
          v
+------------------------+
|  Data Store:          |
|  - MySQL Database    | 
|  (User Credentials)  |
+------------------------+

Explanation:
External Entity (User): The user interacts with the system to sign up, log in, access the retail page, and log out.
Process (Authentication System): The React and Node.js application handles user authentication and authorization.
Data Store (MySQL Database): Stores user credentials and session data.
Level 1 DFD (Decomposed Processes):
+-----------------------+
|    External Entity    |
|        (User)        |
+-----------------------+
          |
          v
+--------------------------+
|   Process: 1.1          |
|   User Registration    |
+--------------------------+
          |
          v
+--------------------------+
|   Process: 1.2          |
|   User Login           |
+--------------------------+
          |
          v
+--------------------------+
|   Process: 1.3          |
|   Access Retail Page   |
+--------------------------+
          |
          v
+--------------------------+
|   Process: 1.4          |
|   User Logout          |
+--------------------------+
          |
          v
+--------------------------+
|   Data Store:           |
|   MySQL Database        |
|   (User Credentials)    |
+--------------------------+

Explanation:
Process 1.1 (User Registration): The user submits registration details, which are validated and stored in the database.
Process 1.2 (User Login): The user provides login credentials, which are verified against the database. If successful, a session is created.
Process 1.3 (Access Retail Page): The user, after logging in, can access the retail page. The system verifies the session before granting access.
Process 1.4 (User Logout): The user logs out, and the system terminates the session.


# **Data Flow Diagram (DFD) for Simple Form Handling App**

## **Level 0 DFD (Context Diagram)**
### **Entities & Flow:**
- **User** → Enters Data → **Form Handling App** → Processes & Displays Data

```
+-----------------------+
|  External Entities    |
|                       |
|   - User             |
+-----------------------+
          |
          v
+------------------------+
|   Form Handling App    |
|   (React Frontend)     |
+------------------------+
```

### **Explanation:**
- **External Entity (User):** Represents the person interacting with the form by entering input.
- **Process (Form Handling App):** Manages form interactions, captures user input, and processes it accordingly.

---

## **Level 1 DFD (Decomposed Processes)**

```
+-----------------------+
|    External Entity    |
|        (User)        |
+-----------------------+
          |
          v
+--------------------------+
|   Process: 1.1          |
|   User Enters Data      |
+--------------------------+
          |
          v
+--------------------------+
|   Process: 1.2          |
|   Handle Form Submit    |
+--------------------------+
          |
          v
+--------------------------+
|   Process: 1.3          |
|   Display Data          |
+--------------------------+
```

### **Explanation:**
- **Process 1.1 (User Enters Data):** The user types their name and email into the form fields.
- **Process 1.2 (Handle Form Submit):** On clicking "Submit," the app validates, stores data in state, or sends it to a server.
- **Process 1.3 (Display Data):** The app displays the submitted data, shows a confirmation message, or takes further actions.

### **Key Features:**
- Uses React's **useState hook** to manage form data.
- Captures and processes user input.
- Handles form submission with validation and UI updates.

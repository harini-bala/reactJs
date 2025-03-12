# Counter App - Data Flow Diagram (DFD)

## Level 0: Context Diagram

At the highest level, the system consists of a **User** interacting with the **Counter Application**.

```plaintext
+-----------------------+
|  External Entity      |
|       (User)         |
+-----------------------+
          |
          v
+--------------------------+
|      Process: Counter    |
|     (React Application)  |
+--------------------------+
          |
          v
+--------------------------+
|   Data Store: State      |
|  (Counter Value Storage) |
+--------------------------+
```

### Explanation:
- **External Entity (User):** The user interacts with the counter application by clicking buttons.
- **Process (Counter App):** The app processes user input and updates the counter.
- **Data Store (State):** The counter value is stored and updated dynamically in React state.

---

## Level 1: Detailed Data Flow Diagram

Breaking down the **Counter App (React Application)** into specific processes:

```plaintext
+--------------------------+
|    External Entity       |
|         (User)          |
+--------------------------+
           |
           v
+--------------------------+
| Process: 1.1 Handle Clicks |
| (Increment/Decrement)     |
+--------------------------+
           |
           v
+--------------------------+
|   Data Store: State       |
|  (Stores Counter Value)   |
+--------------------------+
           |
           v
+--------------------------+
| Process: 1.2 Update UI    |
| (Reflect Counter Value)   |
+--------------------------+
```

### Explanation:
1. **User Input (Clicking Buttons):**
   - The user clicks **Increment** or **Decrement** buttons.

2. **Process 1.1 (Handle Clicks):**
   - React listens to user actions and updates the **counter state**.

3. **Data Store (State):**
   - The updated **counter value** is stored in **React's state**.

4. **Process 1.2 (Update UI Display):**
   - The app dynamically updates and displays the **new counter value**.

---

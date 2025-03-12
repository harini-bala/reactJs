# Data Flow Diagram (DFD) for Todo App

## Level 0 (Context Diagram)
```
+------------------+
|      User       |
+------------------+
         ↕
+------------------+
|    Todo App     |
+------------------+
         ↕
+------------------+
|  Task Management |
+------------------+


### Explanation:
- **User**: Interacts with the application by adding, deleting, and viewing tasks.
- **Todo App**: Manages user interactions and task-related operations.
- **Task Management**: Stores and processes tasks.

---


## Level 1 (Detailed Flow)
```
+------------------+
|      User       |
+------------------+
         ↓
+------------------+
|   Input Field   |
+------------------+
         ↓
+-------------------------+
|    State Management    |
|------------------------|
| - task (current input) |
| - tasks (task array)   |
+-------------------------+
         ↓
+-------------------------+
|    Task Operations     |
|------------------------|
| - Add Task            |
| - Delete Task         |
+-------------------------+
         ↓
+-------------------------+
|    Task Display        |
|------------------------|
| - Task List           |
| - Delete Buttons      |
+-------------------------+
```


### **Explanation:**
1. **User**: Inputs a task through the input field.
2. **Input Field**: Captures user input and updates the current task state.
3. **State Management**: Maintains tasks in an array using React's `useState` hook.
4. **Task Operations**:
   - **Add Task**: Adds the new task to the task list.
   - **Delete Task**: Removes a task from the list.
5. **Task Display**:
   - Shows the task list.
   - Provides delete buttons for removing tasks.

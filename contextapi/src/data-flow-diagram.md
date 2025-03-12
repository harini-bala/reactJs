# React Theme Toggle App - Data Flow Diagram (DFD)

## Level 0: Context Diagram

At the highest level, the system consists of a **User** interacting with the **Theme Context**, which manages and updates the theme state.

```plaintext
+-----------------------+
|  External Entity      |
|       (User)         |
+-----------------------+
          |
          v
+---------------------------+
|     Process: UI           |
|  (Toggle Theme Button)    |
+---------------------------+
          |
          v
+---------------------------+
|  Process: Theme Context   |
|  (Manages Theme State)    |
+---------------------------+
          |
          v
+---------------------------+
|  Data Store: UI State     |
|   (Light/Dark Mode)       |
+---------------------------+
```

### Explanation:
- **External Entity (User):** The user interacts with the UI to toggle the theme.
- **Process (UI - Toggle Theme Button):** The UI captures the user action.
- **Process (Theme Context):** Manages and updates the theme state (light ↔ dark).
- **Data Store (UI State):** Stores and reflects the selected theme in the UI.

---

## Level 1: Detailed Data Flow Diagram

Breaking down the **Theme Toggle Process** into detailed steps:

```plaintext
+--------------------------+
|    External Entity       |
|         (User)          |
+--------------------------+
           |
           v
+--------------------------+
|  Process: User Clicks   |
|  (Toggle Theme Button)  |
+--------------------------+
           |
           v
+--------------------------+
|  Process: App Component  |
| (Captures Click Event)   |
+--------------------------+
           |
           v
+------------------------------+
| Process: Theme Context       |
| (Updates Theme State)        |
+------------------------------+
           |
           v
+------------------------------+
| Data Store: UI State         |
| (Stores New Theme: Light/Dark) |
+------------------------------+
           |
           v
+------------------------------+
| UI Update: App Component     |
| (Applies Updated Theme)      |
+------------------------------+
```

### Explanation:
1. **User Interaction:**
   - The user clicks the **Toggle Theme** button.
   - The click event is captured by the **App Component**.

2. **Theme Context Processing:**
   - The **Theme Context Provider** updates the theme state (light ↔ dark).
   - The updated theme is stored in the **UI State**.

3. **UI Update:**
   - The **App Component** reads the updated theme from **Theme Context**.
   - The CSS classes are updated to reflect the new theme.
   - The UI displays the **Current Theme** (Light or Dark).

---



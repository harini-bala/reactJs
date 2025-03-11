counterapp:
      =>This project is a simple React application that implements a counter functionality. It allows users to         increment or decrement a counter value using buttons, and the current count is displayed dynamically.
#Level 0 (Context Diagram):

        At the highest level, the system consists of a User interacting with the Counter Application.

+-----------------------+
|  External Entities    |
|                       |
|   - User              |
+-----------------------+
          |
          v
+------------------------+
|    Counter App        |
|  (React Application)  |
+------------------------+
          |
          v
+------------------------+
|  Data Store: State    |
+------------------------+

Explanation:

External Entity (User): The user interacts with the counter application by clicking buttons.
Process (Counter App): The app processes user input and updates the counter.
Data Store (State): The counter value is stored and updated dynamically in React state.


#Level 1 DFD (Decomposed Processes):

Now, breaking down Counter App (React Application) into specific functionalities:
+-----------------------+
|    External Entity    |
|        (User)        |
+-----------------------+
          |
          v
+-----------------------+
|   Process: 1.1        |
|   Handle Clicks       |
+-----------------------+
          |
          v
+-----------------------+
|   Data Store: State   |
+-----------------------+
          |
          v
+-----------------------+
|   Process: 1.2        |
|   Update UI Display   |
+-----------------------+

Explanation:
1. User Input (Clicking Buttons):
The user clicks Increment or Decrement buttons.
2. Process 1.1 (Handle Clicks):
React listens to user actions and updates the counter state.
3. Data Store (State):
The updated counter value is stored in React's state.
4. Process 1.2 (Update UI Display):
The app dynamically updates the displayed counter value.


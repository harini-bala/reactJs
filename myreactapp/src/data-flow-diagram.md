7. Myreactapp

Level 1 DFD (Decomposed Processes)
Breaking down the Login Form Application into its specific functionalities:
+-----------------------+
|    External Entity    |
|        (User)             |
+-----------------------+
          |
          v
+--------------------------+
|   Process: 1.1          |
|   User Inputs Login     |
+--------------------------+
          |
          v
+--------------------------+
|   Process: 1.2          |
|   Validate Credentials  |
+--------------------------+
          |
          v
+--------------------------+
|   Data Store: State /   |
|    API (Authentication) |
+--------------------------+
          |
          v
+--------------------------+
|   Process: 1.3          |
|   Display Response      |
+--------------------------+

Explanation:
Process 1.1 (User Inputs Login):


The user enters an email and password and clicks the "Login" button.
React captures the input using useState hooks.
Process 1.2 (Validate Credentials):


If authentication is API-based, credentials are sent to an authentication API using fetch() or axios.
If local authentication is used, the credentials are checked against predefined values stored in the component state.
Data Store (State / API Authentication):


If the credentials are valid, the system updates the state or retrieves authentication success from the API.
Process 1.3 (Display Response):


If authentication is successful, an alert (Login successful!) is displayed.
If authentication fails, an error message is shown.


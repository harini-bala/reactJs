Simple-form-handelling app
This React application demonstrates basic form handling by capturing user input for "Name" and "Email" fields. It showcases the use of React's useState hook for managing form data and handling form submission events.
Level 0 DFD (Context Diagram)
+-----------------------+
|  External Entities    |
|                                |
|   - User                   | 
+-----------------------+
          |
          v
+------------------------+
|   Form Handling App    |
|  (React Frontend)     |
+------------------------+

External Entity (User): This represents the person interacting with your form. They provide the input data.
Process (Form Handling App): This is your React application itself. It's responsible for managing the form, capturing the user's input, and potentially processing or displaying it.
Level 1 DFD (Decomposed Processes)
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

Process 1.1 (User Enters Data): The user types their name and email into the respective fields of the form.
Process 1.2 (Handle Form Submit): When the user clicks "Submit," the application takes over. This might involve validating the data, storing it in the component's state, or sending it to a server.
Process 1.3 (Display Data): The application might then display the submitted data on the screen, show a confirmation message, or perform some other action based on the input.


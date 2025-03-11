browserrouter app

This project is a simple React app with a navigation bar containing links to Home, About, and Contact pages. It uses React Router for navigation and displays different content based on the selected route. 
Level 0 (Context Diagram):
            At the highest level, the system consists of a User interacting with the Website.

+-----------------------+
|  External Entities    |
|                       |
|   - User              |
+-----------------------+
          |
          v
+------------------------+
|        Website         |
|  (React Navigation)    |
+------------------------+
          |
          v
+------------------------+
|   Data Store: Pages    |
+------------------------+

Explanation:
External Entity (User): The user interacts with the website.
Process (Website): The website handles navigation requests.
Data Store (Pages): The system stores page content (Home, About, Contact).

Level 1 DFD (Decomposed Processes):
            Now, breaking down Website (React Navigation) into specific pages:

+-----------------------+
|    External Entity    |
|        (User)        |
+-----------------------+
          |
          v
+-----------------------+
|   Process: 1.1        |
|   Handle Navigation   |
+-----------------------+
          |
          v
+-----------------------+
|   Data Store: Pages   |
+-----------------------+

Explanation:
User interacts with the system by clicking navigation links.
Process 1.1 (Handle Navigation): React Router processes the request and loads the corresponding page.
Data Store (Pages): The application retrieves and displays content for Home, About, or Contact.












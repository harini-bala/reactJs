Note-taking-app
React note-taking app provides a secure platform with login option for users to manage their notes by incorporating a login page for authentication. It streamlines the process of creating, storing, and accessing notes, enhancing user productivity and organization.

Level 0 DFD (Context Diagram)
+-----------------------+
|  External Entities    |
|                                |
|   - User                    |
+-----------------------+
          |
          v
+------------------------+
|  Note Taking App      |
|  (React Frontend)     |
+------------------------+
          |
          v
+------------------------+
|  Data Store:          |
|  - User Authentication|
|  - Notes Data         |
+------------------------+

Explanation:
External Entity (User): The user interacts with the application to log in, create notes, and view existing notes.
Process (Note Taking App): The application handles user authentication, manages note creation, and displays notes.
Data Store:
User Authentication: This could be a local authentication mechanism or an external service that stores user credentials and manages login sessions.
Notes Data: This is where the actual notes are stored. It could be a database, local storage, or an external API.
Level 1 DFD (Decomposed Processes)
+-----------------------+
|    External Entity    |
|        (User)        |
+-----------------------+
          |
          v
+--------------------------+
|   Process: 1.1          |
|   User Authentication  |
+--------------------------+
          |
          v
+--------------------------+
|   Data Store:           |
|   User Authentication  |
+--------------------------+
          |
          v
+--------------------------+
|   Process: 1.2          |
|   Create New Note      |
+--------------------------+
          |
          v
+--------------------------+
|   Data Store:           |
|    Notes Data          |
+--------------------------+
          |
          v
+--------------------------+
|   Process: 1.3          |
|   View Notes           |
+--------------------------+

Explanation:
Process 1.1 (User Authentication): The user provides their credentials to log in. The application validates the credentials against the User Authentication data store.
Process 1.2 (Create New Note): The user creates a new note. The application saves the note in the Notes Data data store.
Process 1.3 (View Notes): The user views existing notes. The application retrieves the notes from the Notes Data data store and displays them.


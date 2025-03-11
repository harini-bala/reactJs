contextapi
This React Theme Toggle App allows users to switch between light and dark modes using React Context API for state management. The theme state is dynamically updated and applied to the UI, ensuring a seamless user experience
Level 0  DFD (Context Diagram):
           Entities:
User → Interacts with the UI to toggle the theme.
Theme Context → Manages and updates the theme state.
           Process:
User clicks the Toggle Theme button.
Theme Context updates the theme state (dark ↔ light).
UI reflects the new theme.
Level 1 DFD (Detailed Process):
            Processes & Data Flow:
User Interaction:
The user clicks the Toggle Theme button.
The click event is captured by the App Component.
Theme Context Processing:
The Theme Context Provider updates the theme state (dark ↔ light).
The updated theme is stored in the context.
UI Update:
The App Component reads the new theme from the Theme Context.
The CSS classes update to reflect the new theme.
The UI displays the Current Theme (dark or light).

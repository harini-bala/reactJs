import { useState } from "react";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import NotesList from "./pages/NotesList";  
import AddNotes from "./pages/AddNotes";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <Notes /> : <Login onLogin={() => setIsLoggedIn(true)} />}
    </div>
  );
}

export default App;

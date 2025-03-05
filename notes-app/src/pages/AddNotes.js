import { useState } from "react";

const AddNotes = ({ addNote }) => {
  const [note, setNote] = useState("");

  const handleAddNote = () => {
    if (note.trim()) {
      addNote(note);
      setNote(""); // Clear input after adding
    }
  };

  return (
    <div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default AddNotes;

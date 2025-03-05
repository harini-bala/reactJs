import React from 'react';
import Notes from './Notes';


function NotesList({ notes, onDeleteNote, onUpdateNote }) {
  return (
    <div>
      <h2>Your Notes:</h2>
      {notes.length === 0 ? (
        <p>No notes yet...</p>
      ) : (
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotesList;
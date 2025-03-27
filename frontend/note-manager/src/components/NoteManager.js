import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NoteManager() {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');
  const [editingId, setEditingId] = useState(null);

  const addNote = () => {
    if (noteInput.trim() === '') return;

    if (editingId) {
      // Edit existing note
      setNotes(notes.map(note => 
        note.id === editingId 
          ? { ...note, text: noteInput } 
          : note
      ));
      setEditingId(null);
    } else {
      // Add new note
      const newNote = {   
        id: Date.now(), 
        text: noteInput,
        createdAt: new Date().toLocaleString()
      };
      setNotes([...notes, newNote]);
    }

    setNoteInput('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const startEditing = (note) => {
    setNoteInput(note.text);
    setEditingId(note.id);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h2>Note Manager</h2>
            </div>
            
            <div className="card-body">
              <div className="input-group mb-3">
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Enter a new note"
                  value={noteInput}
                  onChange={(e) => setNoteInput(e.target.value)}
                />
                <div className="input-group-append">
                  <button 
                    className="btn btn-primary" 
                    onClick={addNote}
                  >
                    {editingId ? 'Update Note' : 'Add Note'}
                  </button>
                </div>
              </div>

              {notes.length === 0 ? (
                <div className="alert alert-info text-center">
                  No notes yet. Add a note!
                </div>
              ) : (
                <ul className="list-group">
                  {notes.map(note => (
                    <li 
                      key={note.id} 
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <span>{note.text}</span>    
                        <small className="d-block text-muted">
                          {note.createdAt}
                        </small>
                      </div>
                      <div>
                        <button 
                          className="btn btn-warning btn-sm mr-2"
                          onClick={() => startEditing(note)}
                        >
                          Edit
                        </button>
                        <button 
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteNote(note.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="card-footer text-center">
              Total Notes: {notes.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteManager;
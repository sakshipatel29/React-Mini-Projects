import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Note from './Note';
import Bin from './Bin';
import './CSS/ReactDnd.css'; 

const ReactDnd = () => {
  const [newNote, setNewNote] = useState(""); 
  const [notes, setNotes] = useState([]); 
  const [binnedItems, setBinnedItems] = useState([]);

  const handleAddNote = () => {
    if (newNote.trim()) {
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      localStorage.setItem("notesList", JSON.stringify(updatedNotes));
      setNewNote("");
    }
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem("notesList");
    if (storedNotes) {
      try {
        const parsedNotes = JSON.parse(storedNotes);
        if (Array.isArray(parsedNotes)) {
          setNotes(parsedNotes);
        } else {
          setNotes([]);
        }
      } catch (e) {
        console.error("Error parsing notes from localStorage", e);
        setNotes([]);
      }
    }
  }, []);

  useEffect(() => {
    let storedBinnedItems = localStorage.getItem("binnedItems");
    if (storedBinnedItems) {
      try {
        const parsedBinnedItems = JSON.parse(storedBinnedItems);
        if (Array.isArray(parsedBinnedItems)) {
          setBinnedItems(parsedBinnedItems);
          setNotes((prevNotes) => prevNotes.filter((note) => !parsedBinnedItems.includes(note)));
        } else {
          setBinnedItems([]);
        }
      } catch (e) {
        console.error("Error parsing binnedItems from localStorage", e);
        setBinnedItems([]);
      }
    }
  }, []);

  const handleBinNote = (note) => {
    setBinnedItems((prevBinnedItems) => {
      const updatedBinnedItems = [...prevBinnedItems, note];
      localStorage.setItem("binnedItems", JSON.stringify(updatedBinnedItems));
      return updatedBinnedItems;
    });

    setNotes((prevNotes) => prevNotes.filter((n) => n !== note));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="add-note-container">
          <input
            id="add-note"
            className="note-input"
            placeholder="Add notes here..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <button className="add-button" onClick={handleAddNote}>Add</button>
        </div>
        <div className="notes-container">
          {notes.map((item) => (
            <Note 
              key={item} 
              note={item} 
              onBin={handleBinNote}
            />
          ))}
        </div>
        <Bin binnedItems={binnedItems} />
      </div>
    </DndProvider>
  );
};

export default ReactDnd;

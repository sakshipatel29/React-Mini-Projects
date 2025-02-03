
import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Note from './Note';
import Bin from './Bin';

const ReactDnd = () => {
  const [newNote, setNewNote] = useState(""); // For storing the value of the new note input
  const [notes, setNotes] = useState([]);  // For storing all notes
  const [binnedItems, setBinnedItems] = useState([]);

  // Handler for adding a new note
  const handleAddNote = () => {
    if (newNote.trim()) { // Only add non-empty notes
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      localStorage.setItem("notesList", JSON.stringify(updatedNotes)); // Save updated notes to localStorage
      setNewNote(""); // Clear input field after adding note
    }
  };

  useEffect(() => {
    // Load notes from localStorage if available
    const storedNotes = localStorage.getItem("notesList");
    if (storedNotes) {
      try {
        const parsedNotes = JSON.parse(storedNotes);
        if (Array.isArray(parsedNotes)) {
          setNotes(parsedNotes);
        } else {
          setNotes([]);  // Set empty array if stored data is not valid
        }
      } catch (e) {
        console.error("Error parsing notes from localStorage", e);
        setNotes([]);  // Set empty array if parsing fails
      }
    }
  }, []);

  useEffect(() => {
    // Load binned items from localStorage
    let storedBinnedItems = localStorage.getItem("binnedItems");
    if (storedBinnedItems) {
      try {
        const parsedBinnedItems = JSON.parse(storedBinnedItems);
        if (Array.isArray(parsedBinnedItems)) {
          setBinnedItems(parsedBinnedItems);
          // Filter out binned items from notes
          setNotes((prevNotes) => prevNotes.filter((note) => !parsedBinnedItems.includes(note)));
        } else {
          setBinnedItems([]); // Set empty array if binned items are not valid
        }
      } catch (e) {
        console.error("Error parsing binnedItems from localStorage", e);
        setBinnedItems([]); // Set empty array if parsing fails
      }
    }
  }, []);

  const handleBinNote = (note) => {
    // Add the note to the binnedItems
    setBinnedItems((prevBinnedItems) => {
      const updatedBinnedItems = [...prevBinnedItems, note];
      localStorage.setItem("binnedItems", JSON.stringify(updatedBinnedItems));
      return updatedBinnedItems;
    });

    // Remove the note from the notes list
    setNotes((prevNotes) => prevNotes.filter((n) => n !== note));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div>
          <input
            id='add-note'
            placeholder='Add notes here...'
            value={newNote}  // Bind input value to state
            onChange={(e) => setNewNote(e.target.value)}  // Update newNote state on input change
          />
          <button onClick={handleAddNote}>Add</button>
        </div>
        {notes.map((item) => (
          <Note 
            key={item} 
            note={item} 
            onBin={handleBinNote}  // Passing the onBin function to Node component
          />
        ))}
        <Bin binnedItems={binnedItems} />
      </div>
    </DndProvider>
  );
}

export default ReactDnd;

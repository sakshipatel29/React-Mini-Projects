import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Note from './Note';
import Bin from './Bin';

const ReactDnd = () => {
    const [notes, setNotes] = useState([]);
    const [binnedNotes, setBinnedNotes] = useState([]);

    useEffect(() => {
        const initialNotes = ["Note 1", "Note 2", "Note 3"];
        localStorage.setItem("notesList", JSON.stringify(initialNotes));

        let array = localStorage.getItem("notesList");
        setNotes(JSON.parse(array));

        console.log(notes);
    },[])

    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <Note />
                <Bin />
            </div>
        </DndProvider>
    )
}

export default ReactDnd
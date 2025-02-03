import React from 'react';
import { useDrop } from 'react-dnd';
import './CSS/Bin.css';

const Bin = ({ binnedItems }) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: "note",
        drop: () => ({ name: "the bin" }),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        })
    }), []);

    return (
        <div ref={drop} className={`bin ${isOver ? 'is-over' : ''} ${canDrop ? 'can-drop' : ''}`}>
            <h2>Bin</h2>
            {binnedItems.map((item, i) => (
                <div key={i}>
                    {item}
                </div>
            ))}
        </div>
    );
}

export default Bin;

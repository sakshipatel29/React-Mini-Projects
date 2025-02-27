import React from 'react';
import { useDrag } from 'react-dnd';
import './CSS/Note.css';

const Node = ({ note, onBin }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "note",
    item: { name: note },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You threw ${item.name} into ${dropResult.name}`);
        onBin(item.name);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div 
      ref={drag} 
      className={`node ${isDragging ? 'dragging' : ''}`}
    >
      {note}
    </div>
  );
}

export default Node;

import React from 'react';
import RenderCard from '../../../globalComponents/RenderCard';

const NotebookNoteList = ({ filteredSortedNotes, handleNotebook,align=true,direct="notebook" }) => {
  return (
    <div className="flex flex-col">
      {filteredSortedNotes.map((item) => (
        <div
          key={item.note_id}
          onClick={() => handleNotebook(item.note_id)}
          className="cursor-pointer hover:opacity-90 transition"
        >
          <RenderCard
            id={item.note_id}
            title={item.title}
            description={item.description || "No description available"}
            deadline={item.deadline || ""}
            alertText={item.alertText || ""}
            areas={item.areas || []}
            subAreas={item.subAreas || []}
            detailContent={item.detailContent || ""}
            align={align}
            direct={direct}
          />
        </div>
      ))}
    </div>
  );
};

export default NotebookNoteList;

import React from 'react';
import RenderCard from '../../../globalComponents/RenderCard';

const NotebookNoteList = ({
  filteredSortedNotes,
  handleNotebook,
  align = true,
  direct = 'notebook',
  justifySelf = false,
}) => {
  return (
    <div className="flex flex-col bg-[#fbfbfb] rounded-lg pl-[24px] pr-[24px] py-8 w-full">
      {filteredSortedNotes.map((item) => (
        <div
          key={item.note_id}
          onClick={() => handleNotebook(item.note_id)}
          className="hover:opacity-90 transition justify-items-center"
        >
          <RenderCard
            id={item.note_id}
            title={item.title}
            description={item.description || 'No description available'}
            deadline={item.deadline || ''}
            alertText={item.alertText || ''}
            areas={item.areas || []}
            subAreas={item.subAreas || []}
            detailContent={item.detailContent || ''}
            align={align}
            direct={direct}
            justifySelf={justifySelf}
          />
        </div>
      ))}
    </div>
  );
};

export default NotebookNoteList;

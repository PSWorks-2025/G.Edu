import React from 'react';

const NotebookNoteList = ({filteredSortedNotes,handleNotebook}) => {
  return (          
    <ul className="mt-4">
      {filteredSortedNotes.map((item, index) => (
          <li onClick={() => handleNotebook(item.note_id)} style={{ borderRadius: 8, padding: 20, marginTop: 8 }} className="w-[95%] h-[98px] bg-white hover:bg-gray-50 cursor-pointer" key={index}>
              <h2 className="ROBOTO_FONTS" style={{ fontSize: 20, fontWeight: 600, color: "#202020" }}>{item.title}</h2>
              <div className="flex flex-row items-center">
                  <p className="ROBOTO_FONTS mt-0.5" style={{ fontSize: 14, fontWeight: 400, color: "#646464" }}>{item.created_at}</p>
                  <p className="ROBOTO_FONTS ml-2" style={{ fontSize: 16, fontWeight: 400, color: "#646464" }}>{item.description ? item.description : "Description"}</p>
              </div>
          </li>
      ))}
    </ul>
  )
};

export default NotebookNoteList;

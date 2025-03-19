import React, { useState } from 'react';
import studentData from '../../../../public/students_data.json';
import { useParams, useNavigate } from 'react-router-dom';
import { PageTitle, RegularText, ComponentSubTitle } from '../../../globalComponents/Typography';

const NotebookContent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const noteId = parseInt(id, 10);
  const mockNote = studentData[0].student_notebook;
  const note = mockNote.find((note) => note.note_id === noteId);

  const [editableTitle, setEditableTitle] = useState(note.title);
  const [editableContent, setEditableContent] = useState(note.content);

  const toggleReturn = () => {
    navigate('/notebook');
  };

  const handleSave = () => {
    alert('Saved');
  };

  return (
    <div className="page">
      <PageTitle>Notebook</PageTitle>
      {/* Return */}
      <div onClick={toggleReturn} className="flex items-center mt-4 cursor-pointer">
        &lt;
        {note.areas.map((item, index) => (
          <RegularText key={index}>{item}</RegularText>
        ))}
        <p className="ROBOTO_FONTS mx-1" style={{ fontWeight: 500, fontSize: 16 }}>
          |
        </p>
        <ComponentSubTitle>{editableTitle}</ComponentSubTitle>
      </div>

      {/* Note content */}
      <div className="w-[95%] bg-white rounded-lg p-5 mt-8">
        <input
          type="text"
          value={editableTitle}
          onChange={(e) => setEditableTitle(e.target.value)}
          className="w-full border-b border-gray-300 focus:outline-none focus:border-black mb-4"
          style={{ fontSize: '1.25rem', fontWeight: 500 }} // Match the ComponentSubTitle style
        />
        <textarea
          className="w-full h-[200px] border border-gray-300 rounded-lg p-2"
          value={editableContent}
          onChange={(e) => setEditableContent(e.target.value)}
          style={{ fontSize: '1rem', fontWeight: 400 }} // Match the RegularText style
        />

        <div className="flex justify-end mt-20">
          <button
            onClick={handleSave}
            className="relative w-[144px] h-[50px] rounded-lg bg-black text-white hover:bg-black-100 cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotebookContent;

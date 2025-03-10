import React from 'react';
import './Notebook.css';
import NotebookSearchBar from './NotebookSearchBar';
import NotebookFilterBar from './NotebookFilterBar';
import NotebookNoteList from './NotebookNoteList';

const Notebook = () => {
  return (
    <div className="page">
      <h1>Notebook Page</h1>
      <NotebookSearchBar />
      <NotebookFilterBar />
      <NotebookNoteList />
    </div>
  );
};

export default Notebook;

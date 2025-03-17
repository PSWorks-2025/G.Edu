import React,{useState,useEffect,useRef} from 'react';
import './Notebook.css';
import NotebookSearchBar from './NotebookSearchBar';
import NotebookFilterBar from './NotebookFilterBar';
import NotebookNoteList from './NotebookNoteList';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '../../globalComponents/Typography';
import studentData from "../../../public/students_data.json"

const Notebook = () => {
  const navigate = useNavigate()
  const [showPopup, setShowPopup] = useState(false);
  const [showSearchContent, setShowSearchContent] = useState(false);
  const [defaultOrder, setDefaultOrder] = useState("topic");
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredSortedNotes, setFilteredSortedNotes] = useState([]);
  const [searchTitle,setSearchTitle]=useState("")
  const [searchDescription,setSearchDescription]=useState()
  const popupRef = useRef(null);
  const filters = ["All", "Common Errors", "Reading", "Math", "Practice Mistakes", "Tips"];
  const mockNote = studentData[0].student_notebook;

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleNotebook = (id) => {
      navigate(`/notebook/${id}`);
  };

  const toggleSearchContent = () => {
      setShowSearchContent(!showSearchContent);
  };

  const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
          setShowPopup(false);
          setShowSearchContent(false);
      }
  };

  useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, []);

  useEffect(() => {
    const filterNotes = () => {
      let notes = mockNote;

      if (activeFilter !== "All") {
        notes = notes.filter(note => note.areas.includes(activeFilter));
      }

      if (searchTitle) {
        notes = notes.filter(note => note.title.toLowerCase().includes(searchTitle.toLowerCase()));
      }

      if (searchDescription) {
        notes = notes.filter(note => note.content.toLowerCase().includes(searchDescription.toLowerCase()));
      }

      if (defaultOrder === "date_created") {
        notes.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      } else if (defaultOrder === "topic") {
        notes.sort((a, b) => a.title.localeCompare(b.title));
      }

      setFilteredSortedNotes(notes);
    };

    filterNotes();
  }, [activeFilter, defaultOrder, mockNote, searchTitle, searchDescription]);

  return (
    <div className="page">
      <PageTitle>Notebook</PageTitle>
      <NotebookSearchBar setSearchDescription={setSearchDescription} setSearchTitle={setSearchTitle} togglePopup={togglePopup} toggleSearchContent={toggleSearchContent} popupRef={popupRef} showPopup={showPopup} showSearchContent={showSearchContent} filters={filters} defaultOrder={defaultOrder} setDefaultOrder={setDefaultOrder} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <NotebookFilterBar filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
      <NotebookNoteList filteredSortedNotes={filteredSortedNotes} handleNotebook={handleNotebook}/>
    </div>
  );
};

export default Notebook;

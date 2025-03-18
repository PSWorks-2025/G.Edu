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
  const [filteredSortedNotes, setFilteredSortedNotes] = useState([]);
  const [searchText,setSearchText]=useState("")
  const filters = [
    { id: "All", label: "All" },
    { id: "Common Errors", label: "Common Errors" },
    { id: "Reading", label: "Reading" },
    { id: "Math", label: "Math" },
    { id: "Practice Mistakes", label: "Practice Mistakes" },
    { id: "Tips", label: "Tips" }
  ];
  const [selectedTab, setSelectedTab] = useState(filters[0].id);
  
  const mockNote = studentData[0].student_notebook;

  const handleNotebook = (id) => {
      navigate(`/notebook/${id}`);
  };

  useEffect(() => {
    const filterNotes = () => {
      let notes = [...mockNote];
  
      if (selectedTab !== "All") {
        notes = notes.filter(note => note.areas.includes(selectedTab));
      }      
  
      if (searchText) {
        notes = notes.filter(note =>
          note.title.toLowerCase().includes(searchText.toLowerCase()) ||
          note.content.toLowerCase().includes(searchText.toLowerCase())
        );
      }
  
      if (defaultOrder === "date_created") {
        notes.sort((a, b) => 
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      } else if (defaultOrder === "topic") {
        notes.sort((a, b) => a.title.localeCompare(b.title));
      }
  
      setFilteredSortedNotes(notes);
    };
  
    filterNotes();
  }, [selectedTab, defaultOrder, mockNote, searchText]);
  

  return (
    <div className="page">
      <PageTitle>Notebook</PageTitle>
      <NotebookSearchBar searchText={searchText} setSearchText={setSearchText} setDefaultOrder={setDefaultOrder} />
      <div className='mt-2'></div>
      <NotebookFilterBar filters={filters} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <NotebookNoteList filteredSortedNotes={filteredSortedNotes} />
    </div>
  );
};

export default Notebook;

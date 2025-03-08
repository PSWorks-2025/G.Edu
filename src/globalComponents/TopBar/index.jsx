import SearchTopBar from './SearchTopBar';
import './TopBar.css';
import NewNote from './NewNote';
import AccountSettings from './AccountSettings';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo-container">
        {/* TODO: Add logo */}
        <h1>SAT Classroom</h1>
      </div>

      <SearchTopBar />
      <NewNote />
      <AccountSettings />
    </div>
  );
};

export default TopBar;

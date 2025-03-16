import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Login from './pages/Login/Login.jsx';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CardContextProvider } from './utils/context/cardContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<App />} /> {/* Catch-all route for App */}
        </Routes>
      </Router>
    </CardContextProvider>
  </StrictMode>
);

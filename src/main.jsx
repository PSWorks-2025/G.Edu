import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Login from './pages/Login/Login.jsx';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './pages/test.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Test />}/> 
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/*" element={<App />} /> 
      </Routes>
    </Router>
  </StrictMode>,
);

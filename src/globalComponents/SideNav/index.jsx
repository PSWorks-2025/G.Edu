import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

function SideNav({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'Home', label: 'Home', icon: 'fa-home' },
    { id: 'MyLearningPlan', label: 'My Learning Plan', icon: 'fa-book' },
    { id: 'Assignment', label: 'Assignment', icon: 'fa-tasks' },
    { id: 'SmartReview', label: 'Smart Review', icon: 'fa-sync' },
    { id: 'AITutor', label: 'AI Tutor', icon: 'fa-robot' },
    { id: 'Notebook', label: 'Notebook', icon: 'fa-book-open' },
    { id: 'LearningResources', label: 'Learning Resources', icon: 'fa-graduation-cap' },
    { id: 'HallOfFame', label: 'Hall of Fame', icon: 'fa-trophy' },
    { id: 'Notification', label: 'Notification', icon: 'fa-bell' },
  ];

  return (
    <nav className="side-nav">
      <ul>
        {navItems.map((item) => (
          <li key={item.id} className={activeTab === item.id ? 'active' : ''}>
            <Link to={`/${item.id}`} onClick={() => setActiveTab(item.id)}>
              <i className={`fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNav;

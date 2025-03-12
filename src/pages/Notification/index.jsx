import React, { useState, useRef, useEffect } from "react";
import "./notification.css";

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [filteredNotifications, setFilteredNotifications] = useState([]);
  const [timeOpen, setTimeOpen] = useState(false);
  const [timeSelected, setTimeSelected] = useState("Last 7 days");
  const timeOptions = ["Last 7 days", "Last 30 days", "Last 3 months"];
  const timeFilterRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (timeFilterRef.current && !timeFilterRef.current.contains(e.target)) {
        setTimeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    fetch("/notifications.json")
      .then((res) => res.json())
      .then((data) => {
        setNotifications(data);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);

  useEffect(() => {
    let days = 7;
    if (timeSelected === "Last 30 days") days = 30;
    else if (timeSelected === "Last 3 months") days = 90;
    const now = new Date("2025-03-10T00:00:00Z");
    let temp = notifications.filter((notif) => {
      const notifDate = new Date(notif.timestamp);
      const diffInDays = (now - notifDate) / (1000 * 60 * 60 * 24);
      return diffInDays >= 0 && diffInDays <= days;
    });
    temp = temp.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setFilteredNotifications(temp);
  }, [timeSelected, notifications]);

  const toggleTimeDropdown = () => {
    setTimeOpen((prev) => !prev);
  };

  const selectTimeOption = (option) => {
    setTimeSelected(option);
    setTimeOpen(false);
  };

  return (
    <div className="notification-page">
      <div className="notification-container">
        <h1 className="page-title">Notification</h1>
        <div className="notification-header">
          <div className="time-filter" ref={timeFilterRef}>
            <button className="time-filter-btn" onClick={toggleTimeDropdown}>
              {timeSelected}
              <span className="arrow-down" />
            </button>
            {timeOpen && (
              <div className="time-filter-menu">
                {timeOptions.map((option) => (
                  <div
                    key={option}
                    className={`time-filter-item ${option === timeSelected ? "active" : ""}`}
                    onClick={() => selectTimeOption(option)}
                  >
                    {option}
                    {option === timeSelected && <span className="check-icon">✔</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="search-box">
            <i className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="notification-list">
          {filteredNotifications.map((item) => (
            <div className="notification-item" key={item.notification_id}>
              <div className="item-content">
                <div className="circle-indicator" />
                <div className="item-text">
                  <div className="item-title">{item.title}</div>
                  <div className="item-desc">{item.message}</div>
                  <div className="item-time">{new Date(item.timestamp).toLocaleString()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notification;

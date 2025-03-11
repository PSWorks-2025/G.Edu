import React from 'react';
import { Link } from 'react-router-dom';
import { primaryColors } from '../primaryColor/Colors';
import TopBar from '../TopBar/TopBar';
import { signOutUser } from '../../services/service';
import { useNavigate } from 'react-router-dom';

function SideNav({ activeTab, setActiveTab }) {
  const navigate = useNavigate();
  const handle_sign_out = async () => {
    await signOutUser();
    navigate('/');
    alert('You have successfully logged out.');
  };
  const navItems = [
    { id: 'Home', label: 'Home', icon: 'home-outline', path: '/home' },
    {
      id: 'MyLearningPlan',
      label: 'My Learning Plan',
      icon: 'calendar-outline',
      path: '/my-learning-plan',
    },
    { id: 'Assignment', label: 'Assignment', icon: 'clipboard-outline', path: '/assignment' },
    { id: 'SmartReview', label: 'Smart Review', icon: 'book-outline', path: '/smart-review' },
    { id: 'AITutor', label: 'AI Tutor', icon: 'chatbubble-outline', path: '/ai-tutor' },
    { id: 'Notebook', label: 'Notebook', icon: 'document-text-outline', path: '/notebook' },
    {
      id: 'LearningResources',
      label: 'Learning Resources',
      icon: 'school-outline',
      path: '/learning-resources',
    },
    { id: 'HallOfFame', label: 'Hall of Fame', icon: 'trophy-outline', path: '/hall-of-fame' },
    {
      id: 'Notification',
      label: 'Notification',
      icon: 'notifications-outline',
      path: '/notification',
    },
  ];

  return (
    <>
      <div className="flex flex-row h-full sticky z-2">
        <nav style={{ backgroundColor: '#FCFCFC' }} className={`w-[260px] h-full px-6`}>
          {/* Logo Container */}
          <div className="h-[70px] items-center flex">
            <p style={{ color: primaryColors.gray, fontSize: 20 }} className="ROBOTO_FONTS ml-10">
              G.Edu
            </p>
          </div>

          {/* Nav Items */}
          <ul className="mt-1">
            {navItems.map((item) => {
              const active = activeTab === item.id;
              return (
                <li
                  style={{
                    backgroundColor: active ? primaryColors.black : primaryColors.white,
                    position: 'relative',
                  }}
                  key={item.id}
                  className={`py-3 px-4 rounded-md mt-1`}
                >
                  {active && (
                    <div
                      style={{ backgroundColor: primaryColors.black }}
                      className="absolute left-0 translate-x-[-330%] top-0 bottom-0 w-2 rounded-r-2xl"
                    ></div>
                  )}
                  <Link
                    to={`${item.path}`}
                    onClick={() => setActiveTab(item.id)}
                    className="flex items-center"
                  >
                    <ion-icon
                      style={{
                        fontSize: 20,
                        color: active ? primaryColors.white : primaryColors.gray,
                      }}
                      name={item.icon}
                    ></ion-icon>
                    <span
                      style={{
                        color: active ? primaryColors.white : primaryColors.gray,
                        marginLeft: 10,
                      }}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Log out button */}
          <button
            className="flex items-center px-4 cursor-pointer absolute bottom-10"
            onClick={handle_sign_out}
          >
            <ion-icon
              style={{ fontSize: 20, color: primaryColors.gray }}
              name="log-out-outline"
            ></ion-icon>
            <span style={{ color: primaryColors.gray, marginLeft: 10 }}>Logout</span>
          </button>
        </nav>
      </div>
      {/* TOP BAR!! */}
      <TopBar />
    </>
  );
}

export default SideNav;

import React, { useEffect, useState } from 'react';
import { getClassRankingByID, getAllClassRanking } from './leaderboardData';
import Tabs from '../../../globalComponents/Tabs';

const Leaderboard = () => {
  const [selectedTab, setSelectedTab] = useState('my-class');
  const [rankingData, setRankingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const tabs = [
    { id: 'my-class', label: 'My Class' },
    { id: 'all-classes', label: 'All Classes' },
  ];

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        setLoading(true);
        let data;
        if (selectedTab === 'my-class') {
          data = await getClassRankingByID(1);
        } else {
          data = await getAllClassRanking();
        }
        setRankingData(data);
      } catch (error) {
        console.log('Error fetching class ranking: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRanking();
  }, [selectedTab]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Reusable Tabs Component */}
      <Tabs tabs={tabs} selectedTab={selectedTab} onTabChange={setSelectedTab} />

      {rankingData.map((student, index) => (
        <div key={index} className="bg-white rounded-lg shadow mb-4 overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            {/* Left: Profile and Stats */}
            <div className="flex items-center flex-1">
              {/* Profile Circle */}
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                {/* Empty avatar placeholder */}
              </div>

              {/* Student Info */}
              <div className="flex-1">
                <p className="font-medium text-gray-800 text-lg">Name</p>
                <div className="mt-1 text-sm text-gray-500">
                  <div className="flex flex-wrap gap-x-4">
                    <div>
                      Study time: <span className="font-medium">{student.study_time} mins/day</span>
                    </div>
                    <div>
                      Accuracy: <span className="font-medium">{student.accuracy * 100}%</span>
                    </div>
                    <div>
                      Streak: <span className="font-medium">{student.streak}</span>
                    </div>
                    <div>
                      Deadline missed:{' '}
                      <span className="font-medium">{student.deadline_missed}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Score and Rank */}
            <div className="flex items-center">
              {/* Score */}
              <div className="text-right mr-6">
                <p className="font-medium text-gray-800 text-xl">{student.ranking_score}</p>
              </div>

              {/* Rank Circle */}
              <div
                className={`w-12 h-12 rounded-full ${
                  index === 0 ? 'bg-green-500' : 'bg-gray-500'
                } flex items-center justify-center text-white font-medium text-xl`}
              >
                {index + 1}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;

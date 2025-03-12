import React, { useEffect, useState } from 'react';
import { getClassRankingByID } from './leaderboardData';

const Leaderboard = () => {
  const [myClassRank, setMyClassRank] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const myClassRankData = await getClassRankingByID(1); // Using student_id 1 who belongs to class_id 1
        setMyClassRank(myClassRankData);
        console.log('myClassRank: ', myClassRankData);
      } catch (error) {
        console.log('Error fetching class ranking: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRanking();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2>Class Leaderboard</h2>

      {myClassRank.map((student, index) => (
        <div key={student.id} className="border-b border-gray-100 p-4 flex items-center">
          {/* Student Profile */}
          <div className="flex items-center flex-1">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
              <span className="text-gray-500">Profile image would go here</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">{student.name}</p>
              <div className="mt-1 text-xs text-gray-500 grid grid-cols-3 gap-x-4">
                <div>
                  Study time: <span className="font-medium">{student.study_time} mins/day</span>
                </div>
                <div>
                  Accuracy: <span className="font-medium">{student.accuracy} %</span>
                </div>
                <div>
                  Streak: <span className="font-medium">{student.streak}</span>
                </div>
                <div className="col-span-3">
                  Deadline missed: <span className="font-medium">{student.deadline_missed}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Score */}
          <div className="text-right mr-4">
            <p className="font-medium text-gray-800">{student.ranking_score}</p>
          </div>

          {/* Rank */}
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;

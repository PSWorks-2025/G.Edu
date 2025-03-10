import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { primaryColors } from '../primaryColor/Colors';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StudyTime = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Study Time',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Suggestion study time',
        data: [30, 30, 30, 30, 30, 30, 30],
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Study Time Over Months',
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: primaryColors.white,
        marginTop: 30,
        borderRadius: 14,
      }}
    >
      <Line data={data} options={options} height={'100'} />
    </div>
  );
};

export default StudyTime;

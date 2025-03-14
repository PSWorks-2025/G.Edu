import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function StudyTimeHeader() {
  const [showChart, setShowChart] = useState(false);
  const timeData = [1.5, 1.2, 1.3, 1.1, 0, 1.6, 1.2];

  // Calculate the average time
  const averageTime = timeData.reduce((acc, time) => acc + time, 0) / timeData.length;
  const averageTimeArray = Array(timeData.length).fill(averageTime.toFixed(1));

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  const data = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Study Hours',
        data: timeData,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Suggested Study Time',
        data: averageTimeArray,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderDash: [5, 5],
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Hours',
        },
      },
    },
  };

  return (
    <Container fluid className="p-5 bg-white mt-6 rounded-xl">
      <Row className="flex items-center justify-between mb-4">
        <Col xs={12} md={6}>
          <h1 className="text-xl font-medium">Student study time chart</h1>
        </Col>

        <Col xs={12} md={6} className="flex items-center justify-end">
          <div className="flex items-center mr-4">
            <div className="bg-blue-500 w-7 h-1 mr-2 rounded"></div>
            <span className="text-gray-600 text-sm">
              Suggested study time: {averageTime.toFixed(1)} hours/day
            </span>
          </div>

          <Button variant="link" className="flex items-center text-blue-500" onClick={toggleChart}>
            {showChart ? (
              <>
                Hide <ChevronUp className="ml-1" size={16} />
              </>
            ) : (
              <>
                View <ChevronDown className="ml-1" size={16} />
              </>
            )}
          </Button>
        </Col>
      </Row>

      {showChart && (
        <Row className="mt-3">
          <Col xs={12}>
            <div className="mx-auto">
              <Line data={data} options={options} height={100} />
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
}

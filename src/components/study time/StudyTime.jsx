import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 Title,
 Tooltip,
 Legend,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


export default function StudyTimeHeader() {
 const [showChart, setShowChart] = useState(false);
 const timeData = [1.5, 1.2, 1.3, 1.1, 1.4, 1.6, 1.2]

//  Calculate the average time
const averageTime = timeData.reduce((acc, time) => acc + time, 0) / timeData.length;
const averageTimeArray = Array(timeData.length).fill(Math.round(averageTime,1));

 const toggleChart = () => {
   setShowChart(!showChart);
 };

 const data = {
   labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
   datasets: [
     {
       label: "Study Hours",
       data: timeData, // Số giờ học mỗi ngày
       borderColor: "rgba(54, 162, 235, 1)",
       backgroundColor: "rgba(54, 162, 235, 0.2)",
       tension: 0.4, // Độ cong của đường
     },
     {
        label:"Suggested Study Time",
        data: averageTimeArray,
        borderColor:"",
        backgroundColor:"",
        tension:0.4
     }
   ],
 };

 // Cấu hình biểu đồ
 const options = {
   responsive: true,
   plugins: {
     legend: {
       display: false,
     },
   },
   scales: {
     y: {
       beginAtZero: true,
     },
   },
 };

 return (
    <Container fluid className="p-5 bg-white mt-6 rounded-xl">
      <Row className="flex flex-row justify-between">
         <Col xs={12} md={6}>
            <h1 className="ROBOTO_FONTS" style={{fontWeight:500,fontSize:20}}>Student study time chart</h1>
         </Col>
          
          <div>
          <Col xs={12} md={4} className="flex flex-row items-center">
                <div className="flex flex-row items-center">
                     <div className="bg-blue-500" style={{ width: "28px", height: "4px", marginRight: "8px",borderRadius:10 }}></div>
                     <span className="ROBOTO_FONTS" style={{fontWeight:400,fontSize:16,color:"#646464"}}>Suggested study time: {Math.floor(averageTime)} hours/day</span>
                </div>

                <div className="items-center gap-2 ">
                     <Form.Select defaultValue="October" className="w-auto ROBOTO_FONTS border-0 outline-0" style={{fontWeight:400,fontSize:16,color:"#646464"}}>
                          <option value="September">September</option>
                          <option value="October">October</option>
                          <option value="November">November</option>
                          <option value="December">December</option>
                     </Form.Select>
                </div>
          </Col>

          <Col xs={12} md={2} className="relative left-82">
                <Button variant="link" className="flex flex-row items-center" style={{color:"#4880FF", fontWeight:400, fontSize:16}} onClick={toggleChart}>
                {!showChart && "View"}
                {!showChart && <ChevronDown className="ms-1" size={16} />}
                </Button>
          </Col>
          </div>
      </Row>

      {showChart && (
         <Row onClick={()=>toggleChart()} className="mt-3">
            <Col xs={12}>
              <div style={{ margin: "auto" }}>
                 <Line data={data} options={options} height={100}/>
              </div>
            </Col>
         </Row>
      )}
    </Container>
 );
}

import React from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  
} from 'chart.js';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  
);

const JSChart = () => {
 const [data, setData] = React.useState({
  labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
  datasets: [
    {
      label:"first dataset",
      data: [10,20,31,42,51,63,31,21,96,61],
      backgroundColor:"white",
      borderColor:"#6C60FF",
      tension:0.4
    }
  ]
 })
  return (<div style={{width:"400px",hieght:"350px"}} ><Line  data={data} ></Line></div>);
}

export default JSChart
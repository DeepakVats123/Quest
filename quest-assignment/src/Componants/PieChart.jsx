import React from 'react'
import {Chart as ChartJs, Tooltip,Title,ArcElement,Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJs.register(
    Tooltip,Title,ArcElement,Legend
)

const PieChart = () => {
    const data = {
        datasets: [{
            data: [40, 30, 30],
            backgroundColor: [
                '#303030','#7000FF','#AA41FB'
            ]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Twitter',
            'Metaverse',
            'Discord'
        ]
    };
  return (
    <div style={{height: "200px",
        width: "200px"
        }}> <Pie data={data} /></div>
  )
}

export default PieChart
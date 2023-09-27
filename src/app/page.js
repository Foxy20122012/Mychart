'use client'

// pages/graph.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  
);

const Graph = ()=>{

  const data= {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [
      {
        labels: 'Sales of the week',
        data: [6,3,6],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
        fill: true,
        tension: 0.4,
      }
    ]
  }

 const options = {
  Plugins:{
    legend: true
  },
  scales: {
    y: {
      min: 3,
      max: 6
    }
  }
 }

  return(
    <div className=''>
      Hello Graph
      <div className='h-96'>
      <Line
      data={data}
      options={options}

      ></Line>
      </div>
    </div>
  )
}

export default Graph;
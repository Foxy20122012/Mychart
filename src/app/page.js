'use client'

// pages/graph.js
import React, { useState, useEffect } from 'react';
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
const Graph = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Función para calcular los datos de la gráfica
    const calculateChartData = () => {
      const labels = [];
      const datasets = [];

      // Define las funciones para las tres curvas
      const functions = [
        {
          label: "f(x) = x",
          function: (x) => x,
          borderColor: "rgba(75, 192, 192, 1)",
        },
        {
          label: "f(x) = x²",
          function: (x) => x * x,
          borderColor: "rgba(153, 102, 255, 1)",
        },
        {
          label: "f(x) = x * log(x)",
          function: (x) => x * Math.log(x),
          borderColor: "rgba(255, 206, 86, 1)",
        },
      ];

      for (let i = 1; i <= 5; i++) {
        labels.push(i);
      }

      functions.forEach((func) => {
        const data = labels.map((x) => func.function(x));
        datasets.push({
          label: func.label,
          borderColor: func.borderColor,
          data: data,
          fill: false,
        });
      });

      // Configura los datos para el gráfico
      setChartData({
        labels: labels,
        datasets: datasets,
      });
    };

    calculateChartData(); // Calcula los datos de la gráfica al cargar la página

  }, []);

  return (
    <div className="">
      Hello Graph
      <div className="h-96">
        {chartData && (
          <Line
            data={chartData}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    maxTicksLimit: 5, // Configura el número máximo de marcas en el eje Y
                  },
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Graph;
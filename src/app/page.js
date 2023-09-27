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

import { evaluate } from 'mathjs';

const Graph = () => {
  const [chartData, setChartData] = useState(null);
  const [expression, setExpression] = useState('x'); // Expresión algebraica por defecto
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  useEffect(() => {
    // Función para calcular los datos de la gráfica
    const calculateChartData = () => {
      const labels = [];
      const datasets = [];

      // Define la función para la expresión algebraica ingresada
      const func = (x) => {
        try {
          return evaluate(expression.replace(/x/g, x));
        } catch (error) {
          return NaN; // Si hay un error en la evaluación, se mostrará como NaN en la gráfica
        }
      };

      for (let i = start; i <= end; i++) {
        labels.push(i);
      }

      // Calcula los datos para la expresión ingresada
      const data = labels.map((x) => func(x));

      datasets.push({
        label: `f(x) = ${expression}`,
        borderColor: "rgba(75, 192, 192, 1)",
        data: data,
        fill: false,
      });

      // Configura los datos para el gráfico
      setChartData({
        labels: labels,
        datasets: datasets,
      });
    };

    calculateChartData(); // Calcula los datos de la gráfica al cargar la página o cuando cambie la expresión o intervalos

  }, [expression, start, end]);

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza el cálculo de la gráfica cuando se envía el formulario
    calculateChartData();
  };

  return (
    <div className="">
      <h1>Generador de Gráficas</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Expresión algebraica: </label>
          <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
          />
        </div>
        <div>
          <label>Intervalo inicial: </label>
          <input
            type="number"
            value={start}
            onChange={(e) => setStart(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>Intervalo final: </label>
          <input
            type="number"
            value={end}
            onChange={(e) => setEnd(parseInt(e.target.value))}
          />
        </div>
      
      </form>
      <div className="h-80 ">
        {chartData && (
          <Line
            data={chartData}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    maxTicksLimit: 5,
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



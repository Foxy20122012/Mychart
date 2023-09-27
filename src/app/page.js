'use client'


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
      <h1 className='px-4 text-center m-4 font-bold  text-xl'>Generador de Gráficas</h1>
      <form onSubmit={handleSubmit} 
      className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4"
      >
        <div className='mb-4'>
          <label  className="text-center justify-center block text-sm font-medium text-gray-700">Expresión algebraica: </label>
          <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            className="border border-gray-400 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="text-center justify-center block text-sm font-medium text-gray-700">Intervalo inicial: </label>
          <input
            type="number"
            value={start}
            onChange={(e) => setStart(parseInt(e.target.value))}
            className="border border-gray-400 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="text-center justify-center block text-sm font-medium text-gray-700">Intervalo final: </label>
          <input
            type="number"
            value={end}
            onChange={(e) => setEnd(parseInt(e.target.value))}
            className="border border-gray-400 rounded-md p-2 w-full"
          />
        </div>
      
      </form>
      <div className='flex justify-center items-center '>
      <div  className=' h-[1000px] w-[1300px] '>
      
        {chartData && (
          <Line className='border border-gray-800 rounded-xl'
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
     
    </div>
  );
};

export default Graph;



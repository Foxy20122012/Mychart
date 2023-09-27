'use client'

import React, { useState, useEffect } from 'react';
import useHasMounted from '@/hooks/useHasMounted';

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
import GraphForm from '@/components/GraphForm';

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

      // Función para evaluar la expresión ingresada
      const func = (x) => {
        try {
          return evaluate(expression.replace(/x/g, x));
        } catch (error) {
          return NaN; // Si hay un error en la evaluación, se mostrará como NaN en la gráfica. Eso quiere decir que no se mostrará nada en la grafica aparecera en blanco.
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
    <div>
    
    <div className="">
      <h1 className='px-4 text-center m-4 font-bold  text-xl'>Generador de Gráficas</h1>
    
      <div className='flex justify-center items-center '>
      <div  className=' h-[9500px] w-[1200px] '>
      <GraphForm
        expression={expression}
        start={start}
        end={end}
        setExpression={setExpression}
        setStart={setStart}
        setEnd={setEnd}
        handleSubmit={handleSubmit}
      />
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
    </div>
  );
};

export default Graph;



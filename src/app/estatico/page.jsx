'use client'


import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import useHasMounted from '@/hooks/useHasMounted';
import Loading from '@/components/shared/Loading';//Spinner de Carga
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
const GraphEstatico = () => {
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

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return  <Loading />;
  }

  return (
    <div className='m-4 justify-center text-center font-bold text-xl'>
        Recreacion Estatica del Ejemplo
       <p className='text-center justify-center m-8 '>Se uso el componente de ejemplo y la libreria para poder recrear el componente como primer trabajo antes
       y asi comprende su funcionalidad. Posteriormente se trabajo en base a eventos usando hooks. </p> 
    <div className="flex justify-center items-center">
      <div className="h-[900px] w-[1100px] " >
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
    </div>
  );
};

export default GraphEstatico;
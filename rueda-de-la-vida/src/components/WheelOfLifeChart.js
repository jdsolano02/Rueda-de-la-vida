import React from "react";
import { Radar } from "react-chartjs-2";

const WheelOfLifeChart = ({ values }) => {
  const data = {
    labels: [
      "Salud física",
      "Trabajo",
      "Situación financiera",
      "Estado emocional",
      "Diversión y ocio",
      "Familia y amigos",
      "Relación sentimental",
      "Desarrollo personal",
    ],
    datasets: [
      {
        data: values,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        min: 0,
        max: 10,
        stepSize: 1,
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default WheelOfLifeChart;

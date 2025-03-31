import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },
};
//we have removed the dummy data 
//we have copied the code from https://react-chartjs-2.js.org || isme vertical grapgh wala code , it was in typescript but we changed in by removing const , to react code

export function VerticalGraph({ data }) {
  return <Bar options={options} data={data} />;
}



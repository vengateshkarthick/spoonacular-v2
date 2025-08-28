"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface NutrientPieChartProps {
  value: number;
  color: string;
  label?: string;
}

export default function NutrientPieChart({
  value,
  color,
  label = "Nutrient",
}: NutrientPieChartProps) {
  const data = {
    labels: [label, "Other nutrients"],
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [color, "#ffc9c950"],
        borderWidth: 1,
        offset: [4, 0],
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    hover: {
      mode: undefined,
    },
    elements: {
      arc: {
        hoverOffset: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-40 h-40 flex items-center justify-center mx-auto">
      <div className="relative w-full h-full flex items-center justify-center">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

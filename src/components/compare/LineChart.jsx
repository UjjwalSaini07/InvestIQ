import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
        labels: {
          color: "#fff",
          font: {
            size: 16,
            weight: "bold",
          },
        },
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#00ffff",
        borderWidth: 1,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      // crypto1: {
      x: {
        position: "left",
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
          borderDash: [0, 0],
          lineWidth: 1,
        },
        ticks: {
          color: "#fff",
          font: {
            size: 14,
          },
        },
      },
      crypto2: multiAxis && {
        position: "right",
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
          borderDash: [0, 0],
          lineWidth: 1,
        },
        ticks: {
          color: "#fff",
          font: {
            size: 14,
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 3,
        borderColor: "rgba(0, 255, 255, 0.8)",
      },
      point: {
        radius: 6,
        backgroundColor: "rgba(0, 255, 255, 1)",
        borderColor: "#fff",
        borderWidth: 2,
        hoverRadius: 8,
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        width: "100%",
        backgroundColor: "#000",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 15px rgba(0, 255, 255, 0.3)",
      }}
    >
      <div style={{ width: "80%", maxWidth: "900px" }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}

export default LineChart;

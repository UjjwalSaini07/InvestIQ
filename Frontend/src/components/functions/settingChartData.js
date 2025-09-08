import { gettingDate } from "./getDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  if (!prices1) return;

  const labels = prices1.map((data) => gettingDate(data[0]));
  const dataset1Data = prices1.map((data) => data[1]);

  const datasets = [
    {
      label: "Crypto 1",
      data: dataset1Data,
      borderWidth: 1,
      fill: !prices2,
      backgroundColor: "rgba(58, 128, 233,0.1)",
      tension: 0.25,
      borderColor: "#3a80e9",
      pointRadius: 0,
      yAxisID: "crypto1",
    },
  ];

  if (prices2) {
    const dataset2Data = prices2.map((data) => data[1]);
    datasets.push({
      label: "Crypto 2",
      data: dataset2Data,
      borderWidth: 1,
      fill: false,
      tension: 0.25,
      borderColor: "#61c96f",
      pointRadius: 0,
      yAxisID: "crypto2",
    });
  }

  setChartData({
    labels,
    datasets,
  });
};

import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { motion } from "framer-motion";

import { fetchDailyData } from "../../api";

import styles from "./Chart.module.css";

const chartVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 5 },
  },
};

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  if (!confirmed) {
    return false;
  }

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(197, 138, 0, 0.5)",
              "rgba(0, 170, 0, 0.5)",
              "rgba(236, 16, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#c58a00",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "#ec1000",
            backgroundColor: "#ec1000",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <motion.div
      className={styles.container}
      variants={chartVariants}
      initial="hidden"
      animate="visible"
    >
      {country ? barChart : lineChart}
    </motion.div>
  );
};

export default Chart;

import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import styles from "./Cards.module.css";

const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 2 },
  },
};

const Cards = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return false;
  }

  return (
    <motion.section
      className={styles.container}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <h4 className="MuiTypography-h4">Global</h4>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography variant="h6" className={styles.infected} gutterBottom>
              Infected
            </Typography>

            <Typography variant="h5" className={styles.infected}>
              <CountUp
                start={0}
                end={confirmed?.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography variant="h6" className={styles.recovered} gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" className={styles.recovered}>
              <CountUp
                start={0}
                end={recovered?.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.card}>
          <CardContent>
            <Typography variant="h6" className={styles.deaths} gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" className={styles.deaths}>
              <CountUp
                start={0}
                end={deaths?.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </motion.section>
  );
};

export default Cards;

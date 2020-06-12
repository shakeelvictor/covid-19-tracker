import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import styles from "./USACard.module.css";

const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const USACard = ({
  usaData: { TotalConfirmed, TotalRecovered, TotalDeaths },
}) => {
  if (!TotalConfirmed) {
    return false;
  }

  return (
    <motion.section
      className={styles.container}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <h4 className="MuiTypography-h4">United States</h4>
      <Grid container spacing={3} justify="center">
        <motion.div variants={childVariants}>
          <Grid item component={Card} xs={12} className={styles.card}>
            <CardContent>
              <Typography variant="h6" className={styles.infected} gutterBottom>
                Infected
              </Typography>
              <Typography variant="h3" className={styles.infected} gutterBottom>
                <CountUp
                  start={0}
                  end={TotalConfirmed}
                  duration={2.5}
                  separator=","
                ></CountUp>
              </Typography>
            </CardContent>
          </Grid>
        </motion.div>

        <motion.div variants={childVariants}>
          <Grid item component={Card} xs={12} className={styles.card}>
            <CardContent>
              <Typography
                variant="h6"
                className={styles.recovered}
                gutterBottom
              >
                Recovered
              </Typography>
              <Typography
                variant="h3"
                className={styles.recovered}
                gutterBottom
              >
                <CountUp
                  start={0}
                  end={TotalRecovered}
                  duration={2.5}
                  separator=","
                ></CountUp>
              </Typography>
            </CardContent>
          </Grid>
        </motion.div>
        <motion.div variants={childVariants}>
          <Grid item component={Card} xs={12} className={styles.card}>
            <CardContent>
              <Typography variant="h6" className={styles.deaths} gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h3" className={styles.deaths} gutterBottom>
                <CountUp
                  start={0}
                  end={TotalDeaths}
                  duration={2.5}
                  separator=","
                ></CountUp>
              </Typography>
            </CardContent>
          </Grid>
        </motion.div>
      </Grid>
    </motion.section>
  );
};

export default USACard;

import React from "react";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";

import styles from "./Header.module.css";

import logo from "../../images/logo.svg";

const imgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 12 },
  },
};

const Header = () => {
  return (
    <div>
      <header>
        <motion.img
          className={styles.image}
          alt="COVID-19"
          src={logo}
          variants={imgVariants}
          initial="hidden"
          animate="visible"
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
        />
        <Typography variant="h4" className={styles.logoType}>
          COVID-19 Tracker
        </Typography>
      </header>
    </div>
  );
};

export default Header;

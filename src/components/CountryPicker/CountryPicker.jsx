import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

const pickerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 5 },
  },
};

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);
  return (
    <motion.section
      variants={pickerVariants}
      initial="hidden"
      animate="visible"
    >
      <FormControl className={styles.formControl}>
        <Typography align="center" gutterBottom>
          Global Chart
        </Typography>
        <NativeSelect
          defaultValue=""
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
        >
          <option value="">Global</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </motion.section>
  );
};

export default CountryPicker;

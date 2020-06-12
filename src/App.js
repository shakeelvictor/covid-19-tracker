import React, { Component } from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  Typography,
} from "@material-ui/core";

import { Header, Cards, Chart, CountryPicker, USACard } from "./components";

import styles from "./App.module.css";
import { fetchData, fetchUSAData } from "./api";

const THEME = createMuiTheme({
  typography: {
    fontFamily: `'Heebo', sans-serif`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default class App extends Component {
  state = {
    data: {},
    usaData: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    const fetchedUSAData = await fetchUSAData();
    this.setState({ data: fetchedData, usaData: fetchedUSAData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, usaData, country } = this.state;
    const date = new Date().toLocaleDateString();
    return (
      <MuiThemeProvider theme={THEME}>
        <Header />
        <main className={styles.container}>
          <Typography className={styles.info}>
            For more information on COVID-19, please visit{" "}
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC Website
            </a>{" "}
            and stay safe!
          </Typography>
          <Typography variant="body2">
            Number of COVID-19 cases as of {date} <br />
            (updated daily)
          </Typography>
          <USACard usaData={usaData} />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </main>
      </MuiThemeProvider>
    );
  }
}

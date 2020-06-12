import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const urlUSA = "https://api.covid19api.com/summary";

export const fetchUSAData = async () => {
  try {
    const { data } = await axios.get(urlUSA);

    const { TotalConfirmed, TotalRecovered, TotalDeaths } = data.Countries[177];

    const modifiedData = {
      TotalConfirmed,
      TotalRecovered,
      TotalDeaths,
    };

    return modifiedData;
  } catch (error) {
    return "Data not returned for some reason. Must be the `rona";
  }
};

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedData;
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

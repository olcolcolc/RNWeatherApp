import { makeAutoObservable } from "mobx";
import { WEATHER_API_KEY } from "@env";
import axios from "axios";
import { locationStore } from "./LocationStore";

// Axios interceptor to log requests
axios.interceptors.request.use(
  function (config) {
    console.log("request:", JSON.stringify(config, null, 2));
    if (config.params) {
      console.log("Params:", config.params);
    }

    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

// Define the structure of the weather data
interface WeatherData {
  current?: {
    temp_c: number;
    condition: {
      text: string;
    };
    humidity: number;
    wind_kph: number;
  };
  forecast?: {
    forecastday: [
      {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          avgtemp_c: number;
          maxwind_kph: number;
          avghumidity: number;
          daily_will_it_rain: number;
          daily_chance_of_rain: number;
          daily_will_it_snow: number;
          daily_chance_of_snow: number;
          condition: {
            text: string;
          };
        };
        astro: { sunrise: string };
      }
    ];
  };
  location?: { country: string; name: string; lat: number; lon: number };
}

class WeatherStore {
  // Observable properties
  weatherData: WeatherData | null = null;
  error = "";
  loading = true;
  tempCelsius: string | null = null;
  weatherCondition: string | null = null;
  humidity: number | null = null;
  windKph: number | null = null;
  sunrise: string | null = null;

  constructor() {
    // Make properties observable
    makeAutoObservable(this);
    locationStore.fetchCurrentLocation().then(() => {
      this.fetchWeatherData();
    });
  }

  // Action methods to update observable properties
  setWeatherData = (weatherData: WeatherData | null) => {
    this.weatherData = weatherData;

    if (weatherData?.current) {
      this.tempCelsius = weatherData.current.temp_c.toFixed(0);
      this.weatherCondition = weatherData.current.condition.text;
      this.humidity = weatherData.current.humidity;
      this.windKph = weatherData.current.wind_kph;
      this.sunrise =
        weatherData.forecast?.forecastday[0]?.astro?.sunrise ?? null;
    } else {
      this.tempCelsius = null;
      this.weatherCondition = null;
      this.humidity = null;
      this.windKph = null;
      this.sunrise = null;
    }
  };

  getForecastByDate = (date: string) => {
    return this.weatherData?.forecast?.forecastday.find(
      (forecast) => forecast.date === date
    );
  };

  setError = (error: string) => {
    this.error = error;
  };

  setLoading = (loading: boolean) => {
    this.loading = loading;
  };

  // Fetch weather data from the API
  fetchWeatherData = async () => {
    try {
      this.setError("");
      this.setLoading(true);

      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json`,
        {
          params: {
            key: process.env.WEATHER_API_KEY,
            q: `${locationStore.latitude},${locationStore.longitude}`,
            days: 7,
            aqi: "no",
            alerts: "no",
          },
        }
      );

      if (response.status === 200) {
        this.setWeatherData(response.data);
      } else {
        this.setError("Failed to fetch weather data");
      }
    } catch (error) {
      this.setError("Failed to fetch weather data");
    } finally {
      this.setLoading(false);
    }
  };
}
export const weatherStore = new WeatherStore();

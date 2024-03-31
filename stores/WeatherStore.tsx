import { makeAutoObservable } from "mobx";
import { WEATHER_API_KEY } from "@env";
import axios from "axios";
import { locationStore } from "./LocationStore";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Log the request method and url
    console.log("request:", JSON.stringify(config, null, 2));
    // If there are params, log them too
    if (config.params) {
      console.log("Params:", config.params);
    }

    // You must return the request config
    return config;
  },

  function (error) {
    // Do something with request error
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
  weeklyForecast: WeatherData | null = null;
  error = "";
  loading = false;
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
            key: WEATHER_API_KEY,
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
// Export an instance of the store
export const weatherStore = new WeatherStore();

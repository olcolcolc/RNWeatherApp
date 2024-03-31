import { makeObservable, observable, action } from "mobx";
import { WEATHER_API_KEY } from "@env";
import axios from "axios";
import { cityStore } from "../stores/CityStore";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Log the request method and url
    console.log("request HEREEE:", JSON.stringify(config, null, 2));
    // If there are params, log them too
    if (config.params) {
      console.log("Paraaams:", config.params);
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
      }
    ];
  };
  location?: { country: string; name: string };
}

class WeatherStore {
  // Observable properties
  forecastDays: number = 1; //Current day as a default
  weatherData: WeatherData | null = null;
  weeklyForecast: WeatherData | null = null;
  error = "";
  loading = false;
  tempCelsius: string | null = null;
  weatherCondition: string | null = null;
  humidity: number | null = null;
  windKph: number | null = null;

  constructor() {
    // Make properties observable
    makeObservable(this, {
      weatherData: observable,
      error: observable,
      loading: observable,
      weatherCondition: observable,
      humidity: observable,
      windKph: observable,
      setWeatherData: action,
      setError: action,
      setLoading: action,
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
    } else {
      this.tempCelsius = null;
      this.weatherCondition = null;
      this.humidity = null;
      this.windKph = null;
    }
  };

  setForecastDays = (days: number) => {
    this.forecastDays = days;
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
            q: "Wroclaw",
            days: this.forecastDays,
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
      console.error("Error fetching weather data:", error);
      console.error("Response data:", (error as any).response.data);
      console.error("Response status:", (error as any).response.status);
      console.error("Response headers:", (error as any).response.headers);
      this.setError("Failed to fetch weather data");
    } finally {
      this.setLoading(false);
    }
  };
}
// Export an instance of the store
export const weatherStore = new WeatherStore();

import { makeObservable, observable, action } from "mobx";
import { WEATHER_API_KEY } from "@env";
import { cityStore } from "./CityStore";
import axios from "axios";

interface WeatherData {
  main?: {
    temp: number;
  };
}

class WeatherStore {
  weatherData: WeatherData | null = null;
  error = "";
  loading = false;
  tempCelsius: string | null = null;

  constructor() {
    makeObservable(this, {
      weatherData: observable,
      error: observable,
      loading: observable,
      setWeatherData: action,
      setTempCelsius: action,
      setError: action,
      setLoading: action,
    });
  }

  setWeatherData = (weatherData: WeatherData | null) => {
    this.weatherData = weatherData;
    this.setTempCelsius();
  };

  setTempCelsius = () => {
    if (this.weatherData && this.weatherData.main) {
      const main = this.weatherData.main;
      this.tempCelsius = (main.temp - 273.15).toFixed(0);
    } else {
      this.tempCelsius = null;
    }
  };

  setError = (error: string) => {
    this.error = error;
  };

  setLoading = (loading: boolean) => {
    this.loading = loading;
  };

  fetchWeatherData = async () => {
    try {
      this.setError("");
      this.setLoading(true);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityStore.city}&appid=${WEATHER_API_KEY}`
      );
      const data: WeatherData = response.data;
      console.log("Weather data fetched:", data);

      if (response.status === 200) {
        this.setWeatherData(data);
      } else {
        this.setError("Failed to fetch weather data");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      this.setError("Failed to fetch weather data");
    } finally {
      this.setLoading(false);
    }
  };
}

export const weatherStore = new WeatherStore();

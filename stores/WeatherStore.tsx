import { makeObservable, observable, action } from "mobx";
import { WEATHER_API_KEY } from "@env";
import axios from "axios";
import { cityStore } from "../stores/CityStore";

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
}

class WeatherStore {
  // Observable properties
  weatherData: WeatherData | null = null;
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
      setTempCelsius: action,
      setError: action,
      setLoading: action,
      setWeatherCondition: action,
      setHumidity: action,
      setWindKph: action,
    });
  }

  // Action methods to update observable properties
  setWeatherData = (weatherData: WeatherData | null) => {
    this.weatherData = weatherData;
    this.setTempCelsius();
    this.setWeatherCondition();
    this.setHumidity();
    this.setWindKph();
  };

  setTempCelsius = () => {
    if (this.weatherData?.current) {
      this.tempCelsius = this.weatherData.current.temp_c.toFixed(0);
    } else {
      this.tempCelsius = null;
    }
  };

  setWeatherCondition = () => {
    if (this.weatherData?.current?.condition) {
      this.weatherCondition = this.weatherData.current.condition.text;
    } else {
      this.weatherCondition = null;
    }
  };

  setHumidity = () => {
    if (this.weatherData?.current) {
      this.humidity = this.weatherData.current.humidity;
    } else {
      this.humidity = null;
    }
  };

  setWindKph = () => {
    if (this.weatherData?.current) {
      this.windKph = this.weatherData.current.wind_kph;
    } else {
      this.windKph = null;
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
        `http://api.weatherapi.com/v1/current.json`,
        {
          params: {
            key: WEATHER_API_KEY,
            q: cityStore.city,
            aqi: "no",
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
      this.setError("Failed to fetch weather data");
    } finally {
      this.setLoading(false);
    }
  };
}

// Export an instance of the store
export const weatherStore = new WeatherStore();

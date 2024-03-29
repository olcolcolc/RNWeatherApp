import { makeObservable, observable, action } from "mobx";
import { WEATHER_API_KEY } from "@env";
import { cityStore } from "../stores/CityStore";
import axios from "axios";

interface WeatherData {
  current?: {
    temp_c: number;
  };
}

interface ForecastEndpointParams {
  days: number;
  cityName: string;
}

const forecastEndpoint = (params: ForecastEndpointParams) =>
  `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${params.cityName}&${params.days}=1&aqi=no&alerts=no`;

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
    if (this.weatherData && this.weatherData.current) {
      this.tempCelsius = this.weatherData.current.temp_c.toFixed(0);
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
        const data: WeatherData = response.data;
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

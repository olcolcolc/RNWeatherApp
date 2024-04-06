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
    forecastday: ForecastDay[];
  };
  location?: {
    country: string;
    name: string;
    lat: number;
    lon: number;
  };
}

interface ForecastDay {
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
  astro: {
    sunrise: string;
  };
}

class WeatherStore {
  // Observable properties
  weatherData: WeatherData | null = null;
  error = "";
  loading = true;
  tempCelsius: number | null = 0;
  weatherCondition: string | null = "";
  humidity: number | null = 0;
  windKph: number | null = 0;
  sunrise: string | null = "";

  // Cache properties
  private cachedWeatherData: WeatherData | null = null;
  private cacheTimestamp: number | null = null;
  private cacheDuration = 10 * 60 * 1000; // Cache duration (10 minutes)

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
      this.tempCelsius = Number(weatherData.current.temp_c.toFixed(0));
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

  // Check if cached weather data is still valid
  private isCachedWeatherDataValid = (): boolean => {
    if (!this.cachedWeatherData || !this.cacheTimestamp) return false;
    return Date.now() - this.cacheTimestamp < this.cacheDuration;
  };

  // Api call to fetch weather data
  private weatherApiCall = async () => {
    return axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
      params: {
        key: process.env.WEATHER_API_KEY,
        q: `${locationStore.latitude},${locationStore.longitude}`,
        days: 7,
        aqi: "no",
        alerts: "no",
      },
    });
  };

  fetchWeatherData = async () => {
    try {
      this.setError("");
      this.setLoading(true);
      // Check if cached weather data is still valid
      if (this.isCachedWeatherDataValid()) {
        this.setWeatherData(this.cachedWeatherData);
        return;
      }
      // If not, execute the API call
      const response = await this.weatherApiCall();
      // If response is successful, update the weather data and cache it
      if (response.status === 200) {
        this.setWeatherData(response.data);
        this.cachedWeatherData = response.data;
        //If the response fail, set an error message
      } else {
        this.setError(
          `Failed to fetch weather data. Status: ${response.status}`
        );
      }
    } catch (error) {
      this.setError(`Failed to fetch weather data. Error: ${error}`);
    } finally {
      this.setLoading(false);
    }
  };
}

export const weatherStore = new WeatherStore();

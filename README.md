<div align="center"><h1>🌥️ RNWeather Forecast App ☀️</h1>

This is a weather forecast application built with React Native and Expo, developed in TypeScript. It utilizes the MobX state management library to effectively manage application state. Application utilizes the Weather API from [weatherapi.com](https://www.weatherapi.com/). </div>

## Features

- User location detection and display
- Today's date display
- Weekly weather forecast
- Detailed daily forecast
- Weather conditions represented with icons

## Components

### WeatherIcon
Displays a weather icon (from Ionicons library) based on the provided weather condition. 
#### Props:
- `name` - A string representing the weather condition. This can be any of the following: "sun", "overcast", "clear", "rain", "sleet", "drizzle", "snow", "freeze", "blizzard", "ice", "cloud", "fog", "mist", "partly cloudy", "thunder", "moon". If the weather condition doesn't match any of these, a default icon is shown.
- `size` - A string that can be either "today" or "weekday". This determines the size of the icon.

### Header
Displays the current location and date.

### WeatherDetails
Displays detailed weather information including wind speed, humidity, and sunrise time.
#### Props:
- `windKph`: The wind speed in kilometers per hour. Can be `null`.
- `humidity`: The humidity percentage. Can be `null`.
- `sunrise`: The sunrise time as a string. Can be `null`.

### MainPanel
Displays weather information. It uses the MobX library for state management and is decorated with the observer function to react to changes in the observable state. Used in HomeScreen and WeeklyForecastDetailsModal
#### Props:
- `weatherCondition` - the current weather condition. This could be any string like "Sunny", "Rainy", etc. If the value is null, it means the weather condition is not available.
- `tempCelsius` -  the current temperature in Celsius. If the value is null, it means the temperature is not available.
- `isDay` - A flag indicating whether it's day or night. 1 means it's day, 0 means it's night. If the value is null, it means this information is not available.

### WeeklyForecastElement
Displays a single element of the weekly weather forecast.
#### Props:
- `weatherCondition` - The weather condition as a string.
- `weekday` - The day of the week as a string.
- `tempCelsius` - The temperature in Celsius as a number.
- `date` - The date as a string. On click displays `WeatherForecastDetailsModal` with weather details of a specific day.

### WeeklyForecast
Displays a scrollable horizontal list of weekly weather forecast elements.

### WeeklyForecastDetailsModal
Displays detailed weather forecast information for a specific date within a modal. It provides information such as weather condition, temperature, humidity, wind speed, sunrise time, and chances of snow or rain.

### ErrorModal
Displays a modal with an error message. The visibility of the modal is controlled by the errorModalVisible property of the modalStore. When the modal's backdrop is pressed or the "Close" button is clicked, the toggleErrorModalVisible method of the modalStore is called to hide the modal. The error message displayed in the modal is the error property of the weatherStore.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies: 
   ```bash
   npx expo install
   ```
4. Start the Expo development server: 
   ```bash
   npx expo start
   ```
## API Usage
This application utilizes the Weather API from weatherapi.com. To use the API, you need to generate your API key. Create a .env file in the root folder of the project and add the following line:
```bash
WEATHER_API_KEY=your_api_key_here
```
Replace your_api_key_here with your actual API key.

## Running on a mobile device

To run the app on your mobile device, download the Expo Go app from the App Store or Google Play. Scan the QR code provided by the Expo development server to open the app.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


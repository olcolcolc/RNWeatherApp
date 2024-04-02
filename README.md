# RNWeather Forecast App

This is a weather forecast application built with React Native and Expo, developed in TypeScript. It utilizes the MobX state management library to effectively manage application state.

## Features

- User location detection and display
- Today's date display
- Weekly weather forecast
- Detailed daily forecast
- Weather conditions represented with icons

## Components

### WeatherIcon
Displays a weather icon (from Ionicons library) based on the provided weather condition. 
#### Props
- `name`: A string representing the weather condition. This can be any of the following: "sun", "overcast", "clear", "rain", "sleet", "drizzle", "snow", "freeze", "blizzard", "ice", "cloud", "fog", "mist", "partly cloudy", "thunder". If the weather condition doesn't match any of these, a default icon is shown.
- `size`: A string that can be either "today" or "weekday". This determines the size of the icon.

### Header
Displays the current location and date.

### WeatherDetails
Displays detailed weather information including wind speed, humidity, and sunrise time.

#### Props
- `windKph`: The wind speed in kilometers per hour. Can be `null`.
- `humidity`: The humidity percentage. Can be `null`.
- `sunrise`: The sunrise time as a string. Can be `null`.
### TodaysWeather
Displays the current weather condition, including the weather icon and temperature. It's an observer component from `mobx-react-lite`, which means it will automatically re-render when the observed `weatherStore` changes to get the current weather condition and temperature.

### WeeklyForecastElement
Displays a single element of the weekly weather forecast.
#### Props
- `weatherCondition`: The weather condition as a string.
- `weekday`: The day of the week as a string.
- `tempCelsius`: The temperature in Celsius as a number.
- `date`: The date as a string. On click displays `WeatherForecastDetailsModal` with weather details of a specific day.

### WeeklyForecast
Displays a scrollable horizontal list of weekly weather forecast elements.

### WeeklyForecastDetailsModal
Displays detailed weather forecast information for a specific date within a modal. It provides information such as weather condition, temperature, humidity, wind speed, sunrise time, and chances of snow or rain.

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

## Running on a mobile device

To run the app on your mobile device, download the Expo Go app from the App Store or Google Play. Scan the QR code provided by the Expo development server to open the app.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


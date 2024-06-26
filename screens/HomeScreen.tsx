import { View, ActivityIndicator, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { observer } from "mobx-react-lite";
import { StatusBar } from "expo-status-bar";
import { container } from "../styles/common/containers";
import Header from "../components/Header";
import WeatherDetails from "../components/WeatherDetails";
import WeeklyForecast from "../components/WeeklyForecast";
import { weatherStore } from "../stores/WeatherStore";
import { screenOrientationStore } from "../stores/ScreenOrientationStore";
import { text } from "../styles/common/texts";
import { theme } from "../styles/theme/theme";
import WeeklyForecastDetailsModal from "../components/WeeklyForecastDetailsModal";
import ErrorModal from "../components/ErrorModal";
import MainPanel from "../components/MainPanel";

const HomeScreen = observer(() => {
  const { orientation } = screenOrientationStore;
  const { loading } = weatherStore;

  return (
    <View style={container.mainContainer}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        {loading ? (
          <View style={container.mainContainer}>
            <Text style={text.loading}>RNWeatherApp</Text>
            <ActivityIndicator size={80} color={theme.colors.white} />
          </View>
        ) : (
          <View>
            <ErrorModal />
            <Header />
            <ScrollView style={container.centerContainer}>
              <MainPanel
                weatherCondition={weatherStore.weatherCondition}
                tempCelsius={weatherStore.tempCelsius}
                isDay={weatherStore.isDay}
              />
              <WeatherDetails
                humidity={weatherStore.humidity}
                windKph={weatherStore.windKph}
                sunrise={weatherStore.sunrise}
              />
              <ScrollView>
                <WeeklyForecast />
                <WeeklyForecastDetailsModal />
              </ScrollView>
            </ScrollView>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
});

export default HomeScreen;

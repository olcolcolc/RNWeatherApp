import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { observer } from "mobx-react-lite";
import { StatusBar } from "expo-status-bar";
import { container } from "../styles/containers";
import Header from "../components/Header";
import TodaysWeather from "../components/TodaysWeather";
import WeatherDetails from "../components/WeatherDetails";
import WeeklyForecast from "../components/WeeklyForecast";

const HomeScreen = observer(() => {
  return (
    <View style={container.mainContainer}>
      <SafeAreaView style={{ justifyContent: "space-between" }}>
        {/* StatusBar */}
        <StatusBar style="light" />

        {/* HEADER */}
        <Header />

        {/* TODAY'S WEATHER */}
        <TodaysWeather />

        {/* WEATHER DETAILS */}
        <WeatherDetails />

        {/* WEEK WEATHER */}
        <WeeklyForecast />
      </SafeAreaView>
    </View>
  );
});

export default HomeScreen;

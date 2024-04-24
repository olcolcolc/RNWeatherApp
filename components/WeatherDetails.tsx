import { View } from "react-native";
import { observer } from "mobx-react";
import { ScrollView } from "react-native-gesture-handler";
import { weatherDetails } from "../styles/components/weatherDetails";
import Detail from "./Detail";

interface WeatherDetailsProps {
  windKph: number | null;
  humidity: number | null;
  sunrise: string | null;
}

const WeatherDetails = observer(
  ({ windKph, humidity, sunrise }: WeatherDetailsProps) => {
    return (
      <ScrollView>
        <View style={weatherDetails.mainContainer}>
          <Detail iconName="leaf-outline" value={windKph} unit=" km/h" />
          <Detail iconName="water-outline" value={humidity} unit=" %" />
          <Detail iconName="sunny-outline" value={sunrise} />
        </View>
      </ScrollView>
    );
  }
);

export default WeatherDetails;

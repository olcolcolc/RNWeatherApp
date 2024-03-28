import React, { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import { text } from "../styles/texts";
import { container } from "../styles/containers";
import WeatherIcon from "./WeatherIcon";

const NeonText = Animated.createAnimatedComponent(Text);

const TodaysWeather = () => {
  const neonAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    let animation = Animated.sequence([
      Animated.timing(neonAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(neonAnim, {
        toValue: 0.5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(neonAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]);

    Animated.loop(animation, { iterations: 3 }).start(() => {
      neonAnim.setValue(1);
    });
  }, [neonAnim]);

  return (
    <View style={container.container}>
      <NeonText style={{ ...text.light, opacity: neonAnim }}>
        {" "}
        <WeatherIcon name="rainy" size="today" />
      </NeonText>
      <Text style={text.light}>24°C</Text>
      <Text style={text.dark}>Sunny</Text>
    </View>
  );
};

export default TodaysWeather;

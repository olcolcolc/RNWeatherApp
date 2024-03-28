import { makeAutoObservable } from "mobx";
import * as Location from "expo-location";

class CityStore {
  city = "";
  error = "";
  loading = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchCurrentCity();
  }

  setCity(city: string) {
    this.city = city;
  }

  setError(error: string) {
    this.error = error;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  async fetchCurrentCity() {
    this.setLoading(true);

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        throw new Error("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      let reverseCode = await Location.reverseGeocodeAsync(location.coords);
      this.setCity(reverseCode[0].city ?? "");
    } catch (error: unknown) {
      cityStore.setError((error as Error).message);
    } finally {
      this.setLoading(false);
    }
  }
}

export const cityStore = new CityStore();

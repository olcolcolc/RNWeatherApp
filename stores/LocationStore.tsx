import { makeAutoObservable } from "mobx";
import * as Location from "expo-location";

class LocationStore {
  latitude: number | null = null;
  longitude: number | null = null;
  error = "";
  loading = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchCurrentLocation();
  }

  setError(error: string) {
    this.error = error;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  async fetchCurrentLocation() {
    this.setLoading(true);

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        throw new Error("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      this.setLocation(location.coords.latitude, location.coords.longitude);
    } catch (error: unknown) {
      this.setError((error as Error).message);
    } finally {
      this.setLoading(false);
    }
  }

  setLocation(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export const locationStore = new LocationStore();

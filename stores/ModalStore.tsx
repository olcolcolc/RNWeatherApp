import { makeAutoObservable, reaction } from "mobx";
import { weatherStore } from "./WeatherStore";

class ModalStore {
  weeklyForecastModalVisible = false;
  errorModalVisible = false;
  date = "";

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => weatherStore.error,
      (error) => {
        this.errorModalVisible = error !== "";
      }
    );
  }

  setDate(date: string) {
    this.date = date;
  }

  toggleWeeklyForecastModalVisible() {
    this.weeklyForecastModalVisible = !this.weeklyForecastModalVisible;
  }

  toggleErrorModalVisible() {
    this.errorModalVisible = !this.errorModalVisible;
  }
}

export const modalStore = new ModalStore();

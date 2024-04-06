import { makeAutoObservable } from "mobx";

class ModalStore {
  weeklyForecastModalVisible = false;
  errorModalVisible = false;
  date = "";

  constructor() {
    makeAutoObservable(this);
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

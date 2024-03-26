import { makeAutoObservable } from "mobx";

class CityStore {
  city = "";
  error = "";

  constructor() {
    makeAutoObservable(this);
  }

  setCity = (city: string) => {
    this.city = city;
  };

  setError = (error: string) => {
    this.error = error;
  };
}

export const cityStore = new CityStore();

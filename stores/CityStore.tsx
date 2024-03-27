import { makeAutoObservable } from "mobx";

class CityStore {
  city = "";
  error = "";
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setCity = (city: string) => {
    this.city = city;
  };

  setError = (error: string) => {
    this.error = error;
  };

  setLoading = (loading: boolean) => {
    this.loading = loading;
  };
}

export const cityStore = new CityStore();

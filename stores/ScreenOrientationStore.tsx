import { makeAutoObservable } from "mobx";
import { Dimensions, ScaledSize } from "react-native";

class ScreenOrientationStore {
  orientation = "PORTRAIT";

  constructor() {
    makeAutoObservable(this);
    Dimensions.addEventListener("change", this.updateOrientation);
  }

  updateOrientation = ({
    window: { width, height },
  }: {
    window: ScaledSize;
  }) => {
    this.orientation = width > height ? "LANDSCAPE" : "PORTRAIT";
  };
}

export const screenOrientationStore = new ScreenOrientationStore();

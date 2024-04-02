import { makeAutoObservable } from "mobx";

class ModalStore {
  modalVisible = false;
  date = "";

  constructor() {
    makeAutoObservable(this);
  }

  setDate(date: string) {
    this.date = date;
  }

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }
}

export const modalStore = new ModalStore();

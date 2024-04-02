import { makeAutoObservable } from "mobx";

class ModalStore {
  modalVisible = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }
}

export const modalStore = new ModalStore();

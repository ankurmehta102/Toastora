import { type ToastOptions, ToastTypes } from "./types";
import store from "../store/ToastStore";

class ToastManager {
  private generateToastId() {
    return new Date().getTime();
  }

  private createToast(type: ToastTypes, title: string, options?: ToastOptions) {
    store.add({
      id: this.generateToastId(),
      title,
      type,
      state: "visible",
      containerId: options?.containerId || "default",
      ...options,
    });
  }

  success = (title: string, options?: ToastOptions) =>
    this.createToast(ToastTypes.Success, title, options);

  error = (title: string, options?: ToastOptions) =>
    this.createToast(ToastTypes.Error, title, options);

  info = (title: string, options?: ToastOptions) =>
    this.createToast(ToastTypes.Info, title, options);

  warning = (title: string, options?: ToastOptions) =>
    this.createToast(ToastTypes.Warning, title, options);
}

const toast = new ToastManager();

export default toast;

import type { ToastOptions, ToastTypes } from "./types";
import store from "../store/ToastStore";

class ToastManager {
  private toastIdCounter = 0;
  private generateToastId() {
    return ++this.toastIdCounter;
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

  default = (title: string, options?: ToastOptions) =>
    this.createToast("default", title, options);

  success = (title: string, options?: ToastOptions) =>
    this.createToast("success", title, options);

  error = (title: string, options?: ToastOptions) =>
    this.createToast("error", title, options);

  info = (title: string, options?: ToastOptions) =>
    this.createToast("info", title, options);

  warning = (title: string, options?: ToastOptions) =>
    this.createToast("warning", title, options);
}

const toast = new ToastManager();

export default toast;

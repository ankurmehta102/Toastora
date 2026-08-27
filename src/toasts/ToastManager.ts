import { ToastOptions, ToastStates, ToastTypes, type Toast } from "./types";

class ToastManager {
  private toasts: Toast[] = [];
  private listener: ((toasts: Toast[]) => void) | null = null;

  subscribe(listener: (toasts: Toast[]) => void) {
    this.listener = listener;
    listener(this.toasts);

    return () => {
      if (this.listener === listener) {
        this.listener = null;
      }
    };
  }

  private notify() {
    this.listener?.(this.toasts);
  }

  private generateToastId() {
    return new Date().getTime();
  }

  private add(toast: Toast) {
    this.toasts = [toast, ...this.toasts];
    this.notify();
  }

  private createToast(type: ToastTypes, title: string, options?: ToastOptions) {
    this.add({
      id: this.generateToastId(),
      title,
      type,
      state: ToastStates.Visible,
      ...options,
    });
  }

  updateState(id: number, value: ToastStates) {
    this.toasts = this.toasts.map((toast) =>
      toast.id === id ? { ...toast, state: value } : toast,
    );
    this.notify();
  }

  remove(id: number) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.notify();
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

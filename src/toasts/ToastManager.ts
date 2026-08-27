import { ToastOptions, ToastStates, ToastTypes, type Toast } from "./types";

class ToastManager {
  private toasts: Toast[] = [];
  private listener: ((toasts: Toast[]) => void) | null = null;

  subscribe(listener: (toasts: Toast[]) => void) {
    this.listener = listener;
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

  success(title: string, options?: ToastOptions) {
    this.add({
      id: this.generateToastId(),
      title,
      type: ToastTypes.Success,
      state: ToastStates.Visible,
      ...options,
    });
  }

  error(title: string, options?: ToastOptions) {
    this.add({
      id: this.generateToastId(),
      title,
      type: ToastTypes.Error,
      state: ToastStates.Visible,
      ...options,
    });
  }

  info(title: string, options?: ToastOptions) {
    this.add({
      id: this.generateToastId(),
      title,
      type: ToastTypes.Info,
      state: ToastStates.Visible,
      ...options,
    });
  }

  warning(title: string, options?: ToastOptions) {
    this.add({
      id: this.generateToastId(),
      title,
      type: ToastTypes.Warning,
      state: ToastStates.Visible,
      ...options,
    });
  }
}

const toast = new ToastManager();

export default toast;

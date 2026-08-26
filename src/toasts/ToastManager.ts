import { ToastTypes, type Toast } from "./types";

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

  remove(id: number) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);

    this.notify();
  }

  success(title: string, desc?: string) {
    this.add({
      id: this.generateToastId(),
      title,
      type: ToastTypes.Success,
      desc,
    });
  }

  error(title: string, desc?: string) {
    this.add({
      id: this.generateToastId(),
      title,
      type: ToastTypes.Error,
      desc,
    });
  }

  info(title: string, desc?: string) {
    this.add({
      id: this.generateToastId(),
      title,
      type: ToastTypes.Info,
      desc,
    });
  }

  warning(title: string, desc?: string) {
    this.add({
      id: this.generateToastId(),
      title,
      type: ToastTypes.Warning,
      desc,
    });
  }
}

const toast = new ToastManager();

export default toast;

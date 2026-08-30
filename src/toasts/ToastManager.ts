import { ToastOptions, ToastStates, ToastTypes, type Toast } from "./types";

class ToastManager {
  private toasts: Toast[] = [];
  private listeners = new Set<() => void>();

  private snapshotCache = new Map<string, Toast[]>();
  private timers = new Map<number, ReturnType<typeof setTimeout>>();

  subscribe = (onStoreChange: () => void) => {
    this.listeners.add(onStoreChange);
    return () => this.listeners.delete(onStoreChange);
  };

  getSnapshot = (containerId: string) => {
    const filtered = this.toasts.filter((t) => t.containerId === containerId);
    const cached = this.snapshotCache.get(containerId);

    if (cached && this.shallowEqualById(cached, filtered)) {
      return cached; // same reference -> no re-render
    }

    this.snapshotCache.set(containerId, filtered);
    return filtered;
  };

  private shallowEqualById(a: Toast[], b: Toast[]) {
    if (a.length !== b.length) return false;
    return a.every((toast, i) => toast === b[i]); // reference equality per item
  }

  private notify() {
    for (const listener of this.listeners) {
      listener();
    }
  }

  private generateToastId() {
    return new Date().getTime();
  }

  private add(toast: Toast) {
    this.toasts = [toast, ...this.toasts];
    if (typeof toast.duration === "number") {
      const timer = setTimeout(() => {
        this.updateState(toast.id, "exiting");
      }, toast.duration);

      this.timers.set(toast.id, timer);
    }
    this.notify();
  }

  private createToast(type: ToastTypes, title: string, options?: ToastOptions) {
    this.add({
      id: this.generateToastId(),
      title,
      type,
      state: "visible",
      containerId: options?.containerId || "default",
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
    const timer = this.timers.get(id);
    if (timer) {
      clearTimeout(timer);
      this.timers.delete(id);
    }
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

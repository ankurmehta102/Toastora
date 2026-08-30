import { ComponentType } from "react";

export enum ToastTypes {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning",
}

export type ToastStates = "exiting" | "visible";

export type Toast = {
  id: number;
  type: ToastTypes;
  title: string;
  state: ToastStates;
  desc?: string;
  duration?: number;
  containerId: string;
  customComponent?: ComponentType<CustomToastProps>;
};

export type ToastProps = {
  id?: number;
  type: ToastTypes;
  title: string;
  state: ToastStates;
  desc?: string;
  duration?: number;
  containerId: string;
  dismissToast: () => void;
};
export type CustomToastProps = Partial<ToastProps>;

export type CancelButtonProps = { onClick: () => void };
export type ToastOptions = Pick<
  Toast,
  "desc" | "duration" | "customComponent"
> &
  Partial<Pick<Toast, "containerId">>;

export type ToastPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export type ToastContainerProps = {
  position?: ToastPosition;
  containerId?: string;
  theme?: "dark" | "light";
};

export type TransitionProps = {
  duration: number;
  children: React.ReactNode;
  isExiting: boolean;
  onTransitionEnd: () => void;
};

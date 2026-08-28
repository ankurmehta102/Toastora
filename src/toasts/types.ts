export enum ToastTypes {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning",
}

export enum ToastStates {
  Exiting = "exiting",
  Visible = "visible",
}

export type Toast = {
  id: number;
  type: ToastTypes;
  title: string;
  state: ToastStates;
  desc?: string;
  duration?: number;
};

export type CancelButtonProps = Pick<Toast, "id">;
export type ToastOptions = Pick<Toast, "desc" | "duration">;

export type ToastPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";
export type ToastContainerProps = {
  position?: ToastPosition;
};

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
};

export type CancelButtonProps = Pick<Toast, "id">;

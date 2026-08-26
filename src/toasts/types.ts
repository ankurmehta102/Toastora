export enum ToastTypes {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning",
}

export type Toast = {
  id: number;
  type: ToastTypes;
  title: string;
  desc?: string;
};

export type CancelButtonProps = Pick<Toast, "id">;

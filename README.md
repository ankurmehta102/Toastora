# Toastly

A lightweight library for managing toast notifications in your React projects.

## Installation

Install toastly using npm:

```bash
npm install toastly
```

## Getting Started

Import `ToastContainer` and `toast` from toastly, then add `ToastContainer` to your app.

Toast notifications will be rendered inside the `ToastContainer`.

```tsx
import { ToastContainer, toast } from "toastly";

function App() {
  const notify = () => {
    toast.success("Profile updated successfully!");
  };

  return (
    <div>
      <button onClick={notify}>Update Profile</button>
      <ToastContainer theme="dark" />
    </div>
  );
}
```

That's it! You can now trigger toast notifications from anywhere in your React application.

## Notification Types

toastly supports different types of notifications for different use cases.

### Default

```tsx
toast.default("You have a new notification!");
```

### Success

```tsx
toast.success("Your changes have been saved!");
```

### Error

```tsx
toast.error("Something went wrong!");
```

### Info

```tsx
toast.info("Your session will expire soon.");
```

### Warning

```tsx
toast.warning("Your storage is full.");
```

## Options

toastly provides additional options to customize your notifications.

| Option            | Type                  | Description                                                                                                     |
| ----------------- | --------------------- | --------------------------------------------------------------------------------------------------------------- |
| `desc`            | `string`              | Optional description displayed below the toast title.                                                           |
| `duration`        | `number`              | Duration in milliseconds before the toast is automatically dismissed.                                           |
| `customComponent` | `React.ComponentType` | Custom React component used to render the toast.                                                                |
| `containerId`     | `string`              | Identifies the `ToastContainer` where the toast should be rendered. Only needed when using multiple containers. |

## Custom Component

You can create a custom toast component by importing the `CustomToastProps` type from toastly. This type defines the props that your custom component will receive.

### CustomToastProps

| Prop           | Type          | Description                                                      |
| -------------- | ------------- | ---------------------------------------------------------------- |
| `id`           | `number`      | The unique ID of the toast.                                      |
| `type`         | `ToastTypes`  | The type of the toast, such as success, error, info, or warning. |
| `title`        | `string`      | The title of the toast.                                          |
| `state`        | `ToastStates` | The current state of the toast, such as `visible` or `exiting`.  |
| `desc`         | `string`      | An optional description for the toast.                           |
| `duration`     | `number`      | The duration of the toast in milliseconds.                       |
| `containerId`  | `string`      | The ID of the container displaying the toast.                    |
| `dismissToast` | `() => void`  | A function that dismisses the toast when called.                 |

### Example

```tsx
import type { CustomToastProps } from "toastly";

const CustomToast = ({ title, desc, dismissToast }: CustomToastProps) => {
  return (
    <div className="custom-toast">
      <div className="custom-toast-content">
        <strong>{title}</strong>
        {desc && <p>{desc}</p>}
      </div>

      <button type="button" onClick={dismissToast}>
        Dismiss
      </button>
    </div>
  );
};

export default CustomToast;
```

Pass your custom component using the `customComponent` option when creating a toast:

```tsx
import { toast } from "toastly";
import CustomToast from "./CustomToast";

toast.success("Profile updated successfully!", {
  customComponent: CustomToast,
});
```

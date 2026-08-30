# Toastora

A lightweight library for managing toast notifications in your React projects.

## Installation

Install Toastora using npm:

```bash
npm install toastora
```

## Getting Started

Import `ToastContainer` and `toast` from Toastora, then add `ToastContainer` to your app.

Toast notifications will be rendered inside the `ToastContainer`.

```tsx
import { ToastContainer, toast } from "toastora";

function App() {
  const notify = () => {
    toast.success("Profile updated successfully!");
  };

  return (
    <div>
      <button onClick={notify}>Update Profile</button>

      <ToastContainer />
    </div>
  );
}
```

That's it! You can now trigger toast notifications from anywhere in your React application.

## Notification Types

Toastora supports different types of notifications for different use cases.

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

Toastora provides additional options to customize your notifications.

| Option            | Type                  | Description                                                                                                     |
| ----------------- | --------------------- | --------------------------------------------------------------------------------------------------------------- |
| `desc`            | `string`              | Optional description displayed below the toast title.                                                           |
| `duration`        | `number`              | Duration in milliseconds before the toast is automatically dismissed.                                           |
| `customComponent` | `React.ComponentType` | Custom React component used to render the toast.                                                                |
| `containerId`     | `string`              | Identifies the `ToastContainer` where the toast should be rendered. Only needed when using multiple containers. |

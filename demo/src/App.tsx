import { useState } from "react";
import "./App.css";
import ToastContainer from "../../src/components/ToastContainer";
import toast from "../../src/toasts/ToastManager";
// import { toast, ToastContainer } from "toastora";
import type { ToastPosition } from "../../src/toasts/types";
// import CustomToast from "./CustomToast";

const TOAST_TYPES = [
  { value: "success", label: "Success" },
  { value: "error", label: "Error" },
  { value: "info", label: "Info" },
  { value: "warning", label: "Warning" },
] as const;

const TOAST_POSITIONS = [
  { value: "top-right", label: "Top Right" },
  { value: "top-left", label: "Top Left" },
  { value: "bottom-right", label: "Bottom Right" },
  { value: "bottom-left", label: "Bottom Left" },
] as const;

function App() {
  const [position, setPosition] = useState<ToastPosition>("top-left");
  const [btnType, setBtnType] = useState("success");
  const [duration, setDuration] = useState<number>(5000);
  const [noDuration, setNoDuration] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(e.target.value as ToastPosition);
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(e.target.value));
  };
  const handleBtnTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBtnType(e.target.value);
  };
  const handleShowNotification = () => {
    switch (btnType) {
      case "success":
        successNotification();
        break;

      case "error":
        errorNotification();
        break;

      case "info":
        infoNotification();
        break;

      case "warning":
        warningNotification();
        break;

      default:
        break;
    }
  };
  const handleNoDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoDuration(e.target.checked);
  };

  const handleDarkModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(e.target.checked);
  };

  const successNotification = () => {
    toast.success(
      "Profile Updated",

      {
        desc: "Your profile information has been updated successfully.",
        duration: noDuration ? undefined : duration,
        // customComponent: CustomToast,
      },
    );
  };
  const errorNotification = () => {
    toast.error("Payment Failed", {
      desc: "We couldn't process your payment. Please check your payment details and try again.",
      duration: noDuration ? undefined : duration,
    });
  };
  const infoNotification = () =>
    toast.info("New Update Available", {
      desc: "A new version of the application is available. Update now to get the latest features and improvements.",
      duration: noDuration ? undefined : duration,
    });
  const warningNotification = () =>
    toast.warning("Storage Almost Full", {
      desc: "You're running low on storage space. Consider deleting some unused files to free up space.",
      duration: noDuration ? undefined : duration,
    });

  return (
    <>
      <div className="demo-container">
        <div className="demo-btn-container">
          <button
            className="demo-show-notification"
            onClick={handleShowNotification}
          >
            Show Notification
          </button>
        </div>

        <div className="demo-opt-container">
          <select value={btnType} onChange={handleBtnTypeChange}>
            {TOAST_TYPES.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <select value={position} onChange={handlePositionChange}>
            {TOAST_POSITIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <label className="duration-label">
            <input
              className="duration-input"
              type="number"
              value={duration}
              onChange={handleDurationChange}
              disabled={noDuration}
            />
            ms duration
          </label>

          <label className="progress-label">
            <input
              type="checkbox"
              checked={noDuration}
              onChange={handleNoDurationChange}
            />
            No Duration
          </label>

          <label className="dark-mode-label">
            <input
              type="checkbox"
              checked={isDark}
              onChange={handleDarkModeChange}
            />
            Dark Mode
          </label>
        </div>
      </div>

      <ToastContainer
        position={position}
        theme={isDark ? "dark" : "light"}
      ></ToastContainer>
    </>
  );
}

export default App;

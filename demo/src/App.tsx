import { useState } from "react";
import "./App.css";
import ToastContainer from "../../src/components/ToastContainer";
import toast from "../../src/toasts/ToastManager";
import type { ToastPosition, ToastTypes } from "../../src/toasts/types";
// import { toast, ToastContainer } from "toastora";
// import CustomToast from "./CustomToast";

const TOAST_TYPES = [
  { value: "default", label: "Default" },
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

const NOTIFICATION_DATA: Record<ToastTypes, { title: string; desc: string }> = {
  default: {
    title: "New Notification",
    desc: "You have a new notification. Please check your account for more details.",
  },
  success: {
    title: "Profile Updated",
    desc: "Your profile information has been updated successfully.",
  },
  error: {
    title: "Payment Failed",
    desc: "We couldn't process your payment. Please check your payment details and try again.",
  },
  info: {
    title: "New Update Available",
    desc: "A new version of the application is available. Update now to get the latest features and improvements.",
  },
  warning: {
    title: "Storage Almost Full",
    desc: "You're running low on storage space. Consider deleting some unused files to free up space.",
  },
};

function App() {
  const [position, setPosition] = useState<ToastPosition>("top-right");
  const [toastType, setToastType] = useState<ToastTypes>("default");
  const [duration, setDuration] = useState<number | "">(5000);
  const [noDuration, setNoDuration] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(e.target.value as ToastPosition);
  };
  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const duration = e.target.value === "" ? "" : Number(e.target.value);
    setDuration(duration);
  };
  const handleToastTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToastType(e.target.value as ToastTypes);
  };
  const handleNoDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoDuration(e.target.checked);
  };
  const handleDarkModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(e.target.checked);
  };

  const handleNotify = () => {
    const { title, desc } = NOTIFICATION_DATA[toastType];
    toast[toastType](title, {
      desc,
      duration: noDuration ? undefined : Number(duration),
    });
  };

  return (
    <>
      <div className="demo-layout">
        <div className="demo-card">
          <div className="demo-card__options-wrapper">
            <div className="demo-card__options-group">
              <div className="field">
                <label className="field__label">Type</label>
                <select
                  className="field__select"
                  value={toastType}
                  onChange={handleToastTypeChange}
                >
                  {TOAST_TYPES.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label className="field__label">Position</label>
                <select
                  className="field__select"
                  value={position}
                  onChange={handlePositionChange}
                >
                  {TOAST_POSITIONS.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label className="field__label">Duration</label>
                <input
                  className="field__input"
                  type="number"
                  value={duration}
                  onChange={handleDurationChange}
                  disabled={noDuration}
                />
              </div>
            </div>
            <div className="demo-card__options-group demo-card__options-group--horizontal">
              <div className="field field--checkbox">
                <input
                  className="field__checkbox"
                  type="checkbox"
                  checked={noDuration}
                  onChange={handleNoDurationChange}
                />
                <label className="field__label">No Duration</label>
              </div>
              <div className="field field--checkbox">
                <input
                  className="field__checkbox"
                  type="checkbox"
                  checked={isDark}
                  onChange={handleDarkModeChange}
                />
                <label className="field__label">Dark Mode</label>
              </div>
            </div>
          </div>
          <div className="demo-card__actions-wrapper">
            <button className="button" onClick={handleNotify}>
              Notify
            </button>
          </div>
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

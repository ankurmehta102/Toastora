import { useState } from "react";
import "./App.css";
import ToastContainer from "../../src/components/ToastContainer";
import toast from "../../src/toasts/ToastManager";
// import { toast, ToastContainer } from "toastora";
import type { ToastPosition } from "../../src/toasts/types";

function App() {
  const [position, setPosition] = useState<ToastPosition>("top-left");
  const [btnType, setBtnType] = useState("success");
  const [duration, setDuration] = useState<number>(5000);
  const [noDuration, setNoDuration] = useState<boolean>(false);
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

  const successNotification = () => {
    toast.success(
      "Profile Updated",

      {
        desc: "Your profile information has been updated successfully.",
        duration: noDuration ? undefined : duration,
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
            <option value="success">Success</option>
            <option value="error">Error</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
          </select>
          <select value={position} onChange={handlePositionChange}>
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
            <option value="bottom-right">Bottom Right</option>
            <option value="bottom-left">Bottom Left</option>
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
              onChange={(e) => setNoDuration(e.target.checked)}
            />
            No Duration
          </label>
        </div>
      </div>

      <ToastContainer position={position}></ToastContainer>
    </>
  );
}

export default App;

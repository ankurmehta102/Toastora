import Toast from "./Toast";
import "../styles/ToastContainer.css";
import { useSyncExternalStore } from "react";
import { ToastContainerProps } from "../toasts/types";
import Transition from "./Transition";
import store from "../store/ToastStore";

function ToastContainer({
  position = "top-right",
  containerId = "default",
  theme,
}: ToastContainerProps) {
  const toasts = useSyncExternalStore(store.subscribe, () =>
    store.getSnapshot(containerId),
  );

  return (
    <div
      data-position={position}
      className={`toasts-container ${theme === "dark" ? "dark" : ""}`}
    >
      {toasts.length !== 0 &&
        toasts.map((toastData) => {
          const ToastComponent = toastData.customComponent ?? Toast;
          return (
            <Transition
              duration={300}
              isExiting={toastData.state === "exiting"}
              onTransitionEnd={() => store.remove(toastData.id)}
              key={toastData.id}
            >
              <ToastComponent
                id={toastData.id}
                type={toastData.type}
                title={toastData.title}
                desc={toastData?.desc}
                state={toastData.state}
                duration={toastData?.duration}
                containerId={containerId}
                dismissToast={() => {
                  store.updateState(toastData.id, "exiting");
                }}
              />
            </Transition>
          );
        })}
    </div>
  );
}

export default ToastContainer;

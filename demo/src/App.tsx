import "./App.css";
import ToastContainer from "../../src/components/ToastContainer";
import toast from "../../src/toasts/ToastManager";

function App() {
  return (
    <>
      <button
        onClick={() =>
          toast.success(
            "Profile Updated",

            {
              desc: "Your profile information has been updated successfully.",
              duration: 5000,
            },
          )
        }
      >
        Success
      </button>
      <button
        onClick={() =>
          toast.error("Payment Failed", {
            desc: "We couldn't process your payment. Please check your payment details and try again.",
          })
        }
      >
        Error
      </button>
      <button
        onClick={() =>
          toast.info("New Update Available", {
            desc: "A new version of the application is available. Update now to get the latest features and improvements.",
          })
        }
      >
        Info
      </button>
      <button
        onClick={() =>
          toast.warning("Storage Almost Full", {
            desc: "You're running low on storage space. Consider deleting some unused files to free up space.",
          })
        }
      >
        Warning
      </button>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;

import React, { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MobiApp from "./MobiApp.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store.jsx";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const RootComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TooltipProvider>
            {isMobile ? <MobiApp /> : <App />}
          </TooltipProvider>
          <ToastContainer 
            autoClose={5000} 
            pauseOnHover={false} 
            newestOnTop 
            closeOnClick 
          />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<RootComponent />);

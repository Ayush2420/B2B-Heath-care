import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
             <App />
      </Provider>
  </StrictMode>,
)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/sw.js")
            .then((registration) => {
                console.log("SW registered:", registration);
            })
            .catch((error) => {
                console.log("SW registration failed:", error);
            });
    });
}
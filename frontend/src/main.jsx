import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import SettingContextProvider from "./context/SettingContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <SettingContextProvider>
        <App />
      </SettingContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./style/normalize.css";
import "./style/fontawesome.min.css";
import "./style/solid.min.css";
import "./style/regular.min.css";
import "./style/index.css";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);

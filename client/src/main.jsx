// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );


// configuramos Auth0 en nuestra aplicación
import React from "react";
import ReactDOM from "react-dom/client";
import Auth0ProviderWithRouter from "./Auth0ProviderWrapper.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0ProviderWithRouter>
      <App />
    </Auth0ProviderWithRouter>
  </React.StrictMode>
);

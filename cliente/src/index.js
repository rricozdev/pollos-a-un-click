// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { Auth0Provider } from "@auth0/auth0-react";

// // console.log(process.env.REACT_APP_AUTH0_DOMAIN, process.env.REACT_APP_AUTH0_CLIENT_ID);
// const domain =process.env.REACT_APP_AUTH0_DOMAIN;
// const client_id=process.env.REACT_APP_AUTH0_CLIENT_ID;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Auth0Provider domain={domain} clientId={client_id} redirectUri={window.location.origin}>
//       <App />
//     </Auth0Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const client_id = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={client_id}
      // Utiliza authorizationParams.redirect_uri en lugar de redirectUri
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();

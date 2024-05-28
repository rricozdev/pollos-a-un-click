// import "./App.css";
// import { useAuth0 } from "@auth0/auth0-react";
// import Login from "./components/Login/Login";
// import Profile from "./components/Profile/Profile";
// import Logout from "./components/Logout/Logout";
// import { DNA } from 'react-loader-spinner'

// function App() {

//   const { isAuthenticated, isLoading } = useAuth0();
//   console.log(`status log : ${isAuthenticated}`);

//   if(isLoading) return <div><DNA
//   visible={true}
//   height="80"
//   width="80"
//   ariaLabel="dna-loading"
//   wrapperStyle={{}}
//   wrapperClass="dna-wrapper"
//   /></div>
//   return (
//     <div className="App">
//       {isAuthenticated ? <Logout /> : <Login />}
//       <Profile />
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import { useAuth0 } from "@auth0/auth0-react";
// import Login from "./components/Login/Login";
// import Profile from "./components/Profile/Profile";
// import { DNA } from 'react-loader-spinner'

// function App() {
//   const { isAuthenticated, isLoading } = useAuth0();
//   console.log(`status log : ${isAuthenticated}`);

//   if(isLoading) return <div><DNA
//     visible={true}
//     height="80"
//     width="80"
//     ariaLabel="dna-loading"
//     wrapperStyle={{}}
//     wrapperClass="dna-wrapper"
//   /></div>
  
//   return (
//     <div className="App">
//       {isAuthenticated ? <Profile /> : <Login />}
//     </div>
//   );
// }

// export default App;


// Este App es funcional
// import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom"; // Importa BrowserRouter
// import { useAuth0 } from "@auth0/auth0-react";
// import Login from "./components/Login/Login";
// import Profile from "./components/Profile/Profile";
// import { DNA } from 'react-loader-spinner'

// function App() {
//   const { isAuthenticated, isLoading } = useAuth0();
//   console.log(`status log : ${isAuthenticated}`);

//   if(isLoading) return <div><DNA
//     visible={true}
//     height="80"
//     width="80"
//     ariaLabel="dna-loading"
//     wrapperStyle={{}}
//     wrapperClass="dna-wrapper"
//   /></div>
  
//   return (
//     <Router> {/* Envuelve tu componente App con BrowserRouter */}
//       <div className="App">
//         {isAuthenticated ? <Profile /> : <Login />}
//       </div>
//     </Router>
//   );
// }

// export default App;



// No funciona el login normal el Auth0 si
// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import Login from "./components/Login/Login";
// import Profile from "./components/Profile/Profile";
// import { DNA } from 'react-loader-spinner';

// function App() {
//   const { isAuthenticated, isLoading } = useAuth0();
//   console.log(`status log : ${isAuthenticated}`);

//   if (isLoading) return (
//     <div>
//       <DNA
//         visible={true}
//         height="80"
//         width="80"
//         ariaLabel="dna-loading"
//         wrapperStyle={{}}
//         wrapperClass="dna-wrapper"
//       />
//     </div>
//   );

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" /> : <Login />} />
//           <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
//           <Route path="/" element={isAuthenticated ? <Navigate to="/profile" /> : <Navigate to="/login" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { DNA } from 'react-loader-spinner';

function App() {
  const { isAuthenticated: isAuth0Authenticated, isLoading } = useAuth0();
  const [isAuthenticated, setIsAuthenticated] = useState(isAuth0Authenticated);

  useEffect(() => {
    if (isAuth0Authenticated) {
      setIsAuthenticated(true);
    }
  }, [isAuth0Authenticated]);

  console.log(`status log : ${isAuthenticated}`);

  if (isLoading) return (
    <div>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/" element={isAuthenticated ? <Navigate to="/profile" /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


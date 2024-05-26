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

import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { DNA } from 'react-loader-spinner'

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  console.log(`status log : ${isAuthenticated}`);

  if(isLoading) return <div><DNA
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  /></div>
  
  return (
    <div className="App">
      {isAuthenticated ? <Profile /> : <Login />}
    </div>
  );
}

export default App;

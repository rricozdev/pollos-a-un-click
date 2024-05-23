import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './DashBoard/Sidebar'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} /> 
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

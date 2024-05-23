// src/Auth0ProviderWrapper.jsx
import React from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Auth0ProviderWithHistory from './Auth0ProviderWrapper.jsx';

const Auth0ProviderWrapper = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Auth0ProviderWithHistory navigate={navigate}>
      {children}
    </Auth0ProviderWithHistory>
  );
};

const Auth0ProviderWithRouter = ({ children }) => (
  <Router>
    <Auth0ProviderWrapper>
      {children}
    </Auth0ProviderWrapper>
  </Router>
);

export default Auth0ProviderWithRouter;

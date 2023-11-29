// import { Switch, Route, BrowserRouter, Routes } from "react-router-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import React from "react";
import { TokenContextProvider } from "./store/token-context";

const App = () => {
  return (
    <TokenContextProvider>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" exact element={<HomePage />} />

          <Route path="/auth" element={<AuthPage />} />

          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </TokenContextProvider>
  );
};

export default App;

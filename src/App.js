import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { useContext } from "react";
import TokenContext from "./store/token-context";

const App = () => {
  const tokenContext = useContext(TokenContext);

  return (
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" exact element={<HomePage />} />

          {!tokenContext.isLoggedIn && (
            <Route path="/auth" element={<AuthPage />} />
          )}

          {tokenContext.isLoggedIn && (
            <Route path="/profile" element={<UserProfile />} />
          )}

          <Route exact path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;

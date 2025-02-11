import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/UserPage/HomePage/HomePage";
import LoginPage from "./pages/AuthPage/LoginPage";
import LayoutLandingPage from "./layout/LayoutLandingPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* use oulet for all landing page component parent */}
          <Route path="/" element={<LayoutLandingPage />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

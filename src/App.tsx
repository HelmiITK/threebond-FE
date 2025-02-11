import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/UserPage/HomePage/HomePage";
import LoginPage from "./pages/AuthPage/LoginPage";
import LayoutLandingPage from "./layout/LayoutLandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* use oulet for all landing page component parent */}
          <Route path="/" element={<LayoutLandingPage/>}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

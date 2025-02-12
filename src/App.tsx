import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/UserPage/HomePage/HomePage";
import LoginPage from "./pages/AuthPage/LoginPage";
import LayoutLandingPage from "./layout/LayoutLandingPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductStorePage from "./pages/UserPage/StoreProductPage/ProductStorePage";
import DetailProductPage from "./pages/UserPage/StoreProductPage/DetailProductPage";

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
            <Route path="/product_store" element={<ProductStorePage />} />
            <Route path="/product_detail" element={<DetailProductPage />} />
          </Route>

          {/* not found url adress */}
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

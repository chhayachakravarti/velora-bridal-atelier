import MainLayout from "./layouts/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Specialists from "./components/Specialists";
import Contact from "./components/Contact";
import Lehengas from "./pages/Lehengas";
import ProductDetailLehnga from "./pages/ProductDetailLehnga";
import Makeup from "./pages/Makeup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MakeupDetail from "./pages/MakeupDetail";
import ProductDetailPhoto from "./pages/ProductDetailPhoto";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Routes>
        {/* 🏠 Homepage */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Hero />
              <Services />
              <About />
              <Specialists />
              <Contact />
            </MainLayout>
          }
        />

        <Route
  path="/lehengas"
  element={
    <MainLayout enableNavbar={true} minimalHeader={true}>
      <Lehengas />
    </MainLayout>
  }
/>

<Route
  path="/makeup"
  element={
    <MainLayout enableNavbar={true} minimalHeader={true}>
      <Makeup />
    </MainLayout>
  }
/>

        <Route path="/makeup/:id" element={<MakeupDetail />} />

        {/* 🎥 Video Product Detail (No Header/OfferBar) */}
        <Route path="/product/:id" element={<ProductDetailLehnga />} />

        {/* 🖼 Photo Product Detail */}
        <Route path="/photo/:id" element={<ProductDetailPhoto />} />
      </Routes>
    </Router>
  );
}

export default App;

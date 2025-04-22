import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LangSupportSection from "./components/LangSupportSection";
import PromoSection from "./components/PromoSection";
import Compiler from "./components/Compiler";
import Footer  from "./components/Footer";
import Features from "./components/Features";
import CodeShare from "./components/CodeShareCollab/CodeShare";
// import SignUp from "./components/authPage/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <LangSupportSection />
              <PromoSection />
              <Features />
            </>
          }
        />
        <Route path="/compiler" element={<Compiler />} />
        <Route path="/codeshare" element={<CodeShare />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

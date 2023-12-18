import "./App.css";

import Footer from "./Component/Footer";
import Greetingpage from "./Component/Greetingpage";
import Header from "./Component/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import ContactUs from "./Component/ContactUs";
import { Card } from "./Component/Card";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Greetingpage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Service" element={<Card />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

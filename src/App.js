import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/header/Header";
import Prefooter from "./components/prefooter/Prefooter";
import Footer from "./components/footer/Footer";
import Clothing from "./components/clothing/Clothing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Collections from "./components/collections/Collections";
import Bags from "./components/bags/Bags";
import Accesories from "./components/accesories/Accesories";
import Shoes from "./components/shoes/Shoes";
import New from "./components/new/New";
import Home from "./Pages/Home";


function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/clothing" element={<Clothing />} />
          <Route path="/shop/bags" element={<Bags />} />
          <Route path="/shop/shoes" element={<Shoes />} />
          <Route path="/shop/accesories" element={<Accesories />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/new" element={<New />} />
        </Routes>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Prefooter />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

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
import Listing from "./components/listing/Listing";


function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/shop/clothing"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/Clothing.json"
                title="CLOTHING"
              />
            }
          />
          <Route
            path="/shop/bags"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/Bags.json"
                title="BAGS"
              />
            }
          />
          <Route
            path="/shop/shoes"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/Shoes.json"
                title="SHOES"
              />
            }
          />
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

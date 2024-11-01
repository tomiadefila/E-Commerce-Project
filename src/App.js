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
import Search from "./components/search/Search"

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Search />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/shop/clothing"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/clothing/Clothing.json"
                title="CLOTHING"
              />
            }
          />
          <Route
            path="/shop/clothing/dresses"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/clothing/Dresses.json"
                title="DRESSES"
              />
            }
          />
          <Route
            path="/shop/clothing/gowns"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/clothing/Gowns.json"
                title="GOWNS"
              />
            }
          />
          <Route
            path="/shop/clothing/knits"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/clothing/Knits.json"
                title="KNITS"
              />
            }
          />
          <Route
            path="/shop/clothing/tops"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/clothing/Tops.json"
                title="TOPS"
              />
            }
          />
          <Route
            path="/shop/clothing/bottoms"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/clothing/Bottoms.json"
                title="BOTTOMS"
              />
            }
          />
          <Route
            path="/shop/bags"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/bags/Bags.json"
                title="BAGS"
              />
            }
          />
          <Route
            path="/shop/bags/clutches"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/bags/Clutches.json"
                title="CLUTCHES"
              />
            }
          />
          <Route
            path="/shop/bags/crossbodybags"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/bags/CrossbodyBags.json"
                title="CROSSBODY BAGS"
              />
            }
          />

          <Route
            path="/shop/bags/minibags"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/bags/Minibags.json"
                title="MINIBAGS"
              />
            }
          />

          <Route
            path="/shop/bags/shoulderbags"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/bags/ShoulderBags.json"
                title="SHOULDER BAGS"
              />
            }
          />

          <Route
            path="/shop/bags/totebags"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/bags/ToteBags.json"
                title="TOTE BAGS"
              />
            }
          />
          <Route
            path="/shop/shoes"
            element={
              <Listing
                dataSource="http://localhost:3000/Data/shoes/Shoes.json"
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

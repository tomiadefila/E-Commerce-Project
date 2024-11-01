import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo192.png";

function Header() {
  return (
    <header>
      <nav>
        <div className="navgrid1">
          <p>SHIPPING TO THE UNITED KINGDOM</p>
          <p>THE VAULT IS OPEN-SHOP NOW</p>
          <p>SAVED LOGIN</p>
        </div>

        <div className="navgrid2">
          <img src={Logo} className="logo" alt="My website logo" />

          <div className="dropdown">
            <Link to="/shop">SHOP</Link>
            <div className="dropdown-content">
              <div className="dropdown-clothing">
                <Link to="/shop/clothing">Clothing</Link>
                <Link to="/shop/clothing/all clothing">All Clothing</Link>
                <Link to="/shop/clothing/dresses">Dresses</Link>
                <Link to="/shop/clothing/gowns">Gowns</Link>
                <Link to="/shop/clothing/knits">Knits</Link>
                <Link to="/shop/clothing/tops">Tops</Link>
                <Link to="/shop/clothing/bottoms">Bottoms</Link>
                <Link to="/shop/clothing/denim">Denim</Link>
                <Link to="/shop/clothing/sets">Sets</Link>
              </div>
              <div className="dropdown-bags">
                <Link to="/shop/bags">Bags</Link>
                <Link to="/shop/bags/all bags">All Bags</Link>
                <Link to="/shop/bags/clutches">Clutches</Link>
                <Link to="/shop/bags/minibags">Mini Bags</Link>
                <Link to="/shop/bags/totebags">Tote Bags</Link>
                <Link to="/shop/bags/shoulderbags">Shoulder Bags</Link>
                <Link to="/shop/bags/crossbodybags">Crossbody Bags</Link>
              </div>
              <div className="dropdown-shoes">
                <Link to="/shop/shoes">Shoes</Link>
                <Link to="/shop/shoes/all shoes">All Shoes</Link>
                <Link to="/shop/shoes/boots">Boots</Link>
                <Link to="/shop/shoes/flats">Flats</Link>
                <Link to="/shop/shoes/evening">Evening</Link>
                <Link to="/shop/shoes/platforms">Platforms</Link>
                <Link to="/shop/shoes/sandals">Sandals</Link>
              </div>
              <div className="dropdown-accesories">
                <Link to="/shop/accesories">Accesories</Link>
                <Link to="/shop/accesories/all shoes">All Accesories</Link>
                <Link to="/shop/accesories/jewellery">Jewellery</Link>
                <Link to="/shop/accesories/earrings">Earringd</Link>
                <Link to="/shop/accesories/necklaces">Necklaces</Link>
                <Link to="/shop/accesories/rings">Rings</Link>
                <Link to="/shop/accesories/bracelets">Bracelets</Link>
              </div>
            </div>
          </div>
          <div>
            <Link to="/collections">COLLECTIONS</Link>
          </div>
          <div>
            <Link to="/new">NEW</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;

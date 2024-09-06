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
              <Link to="/shop/clothing">Clothing</Link>
              <Link to="/shop/bags">Bags</Link>
              <Link to="/shop/shoes">Shoes</Link>
              <Link to="/shop/accesories">Accesories</Link>
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

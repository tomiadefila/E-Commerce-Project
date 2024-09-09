import "./Footer.css";

function Footer() {
    return (
      <footer>
        <div className="footergrid">
          <div className="footergrid1">
            <h5>CULT GAIA</h5>
            <div className="footergrid1a">
              <a href="#">About</a>
              <a href="#">Work with us </a>
              <a href="#">Contact</a>
              <a href="#">Join the Cult</a>
            </div>
          </div>
          <div className="footergrid2">
            <h5>SHOP</h5>
            <div className="footergrid2a">
              <a href="#">Shipping Info</a>
              <a href="#">Returns & Exchanges</a>
              <a href="#">FAQ</a>
              <a href="#">Track Order</a>
            </div>
          </div>
          <div className="footergrid3">
            <h5>LEGAL</h5>
            <div className="footergrid3a">
              <a href="#">Terms</a>
              <a href="#">Mobile Terms</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Sitemap</a>
              <a href="#">Accesibility</a>
            </div>
          </div>
          <div className="footergrid4">
            <h5>SOCIAL</h5>
            <div className="footergrid4a">
              <a href="#">Pinterest</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Vimeo</a>
            </div>
          </div>
          <div>
            <p>
              East Hampton 66 Newton Lane East Hampton, NY 11937 +1 631-800-1334
            </p>
            <p>
              Melrose 8440 Melrose Avenue West Hollywood, CA 90069 +1
              310-623-2479
            </p>
            <p>Miami 135 NE 40th Street Miami, FL 33137 +1 305-987-4684</p>
            <p>New York 60 Wooster Street New York, NY 10012 +1 646-853-2411</p>
          </div>
        </div>
        <div className="footergrid5">
          <p>2024 CULT GAIA</p>
        </div>
      </footer>
    );
  }
  export default Footer;
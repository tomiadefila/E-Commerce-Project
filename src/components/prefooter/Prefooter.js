import "./prefooter.css";
import Dottedmelon from "../images/dotted watermelon .png"
import Mail from "../images/prefooter2.png"

function Prefooter() {
  return (
    <prefooter>
      <div className="prefootergrid1">
        <img src={Dottedmelon} className="dottedmelon" alt="dotted melon" />
      </div>
      <div className="prefootergrid">
        <div className="prefootergrid1">
          <h5>FREE SHIPPING</h5>
          <p>ON ALL ORDERS OVER $150</p>
        </div>
        <div className="prefootergrid2">
          <h5>DUTIES AND TAXES MAY VARY</h5>
          <p>EXTRA CHARGES MAY APPY OUTSIDE THE US</p>
        </div>
        <div className="prefootergrid3">
          <h5>HERE FOR YOU</h5>
          <a href="#">CHAT WITH SALES</a>
          <a href="#">HELLO@CULTGAIACOPY.COM</a>
        </div>       
          </div>
          
        <div className="prefooter2grid">
        <div className="prefootergrid1">
          <img src={Mail} className="mail" alt=" prefooter mail" />
        </div>
        <div className="prefooter2grid2">
          <p>Sign Up For Exclusive Access</p>
        </div>
        <div className="prefooter2grid3">
          <p>SUBMIT</p>
        </div>
      </div>
    </prefooter>
  );
}
export default Prefooter;

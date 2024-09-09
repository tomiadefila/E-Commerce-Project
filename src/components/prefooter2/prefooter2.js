import "./prefooter2.css";
import Mail from "../images/prefooter2.png"

function Prefooter2() {
  return (
    <prefooter2>
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
    </prefooter2>
  );
}
export default Prefooter2;

import { Link } from "react-router-dom";
import "../css/Navbar.css";
import connex from "../icons/logo.png";
import setting from "../icons/setting.png"
import home from "../icons/home.png"
import compare from "../icons/compare.png"


const Navbar = ({toggleSignedIn}) => {

  function check() {
    toggleSignedIn();
  }
  
  return (
    <nav className="navbar">
      <div className="connex">
        <img src={connex} alt="connex logo" className="logo"/>
        Connex
      </div>

      <div className="links">
        <div className="container">
          <Link to="/" onClick={() => check()}>Sign Out</Link>
        </div>
        <div className="container">
          <img src={home} alt="home icon" className="icons"/>
          <Link to="/home">Home</Link>
        </div>
        <div className="container">
          <img src={compare} alt="home icon" className="icons"/>
          <Link to="/compare">Compare</Link>
        </div>
        <div className="container">
          <img src={setting} alt="home icon" className="icons"/>
          <Link to="/nopath">Settings</Link>
        </div>
        {/* <div className="container">
          <Link to="/create">Create</Link>
        </div> */}
      </div>
    </nav>
  );
}
 
export default Navbar;
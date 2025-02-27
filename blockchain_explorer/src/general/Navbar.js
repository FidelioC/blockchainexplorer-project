import "./Navbar.css";
import { Link } from "react-router-dom";

const getImage = (imageName) => require(`./pictures/${imageName}.png`);

function Navbar() {
  return (
    <nav className="navbar_home">
      <div className="navbar_home_left">
        <Link to="/home" className="navbar_logo">
          <img
            src={getImage("navbar_logo")}
            alt="BlockChainExplorer Logo"
            className="navbar_logo_picture"
          />
        </Link>
      </div>
      <div className="navbar_home_center">
        <ul className="navbar_home_center_links">
          <li>
            <Link to="/explorer"> Explore </Link>
          </li>
          <li>
            <Link to="/coinsinfo"> CoinsInfo</Link>
          </li>
        </ul>
      </div>
      <div className="navbar_home_right">
        <a href="/">test right</a>
      </div>
    </nav>
  );
}

export default Navbar;

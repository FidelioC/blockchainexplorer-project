import "./Navbar.css";

const getImage = (imageName) => require(`./pictures/${imageName}.png`);

function Navbar() {
  return (
    <nav className="navbar_home">
      <div className="navbar_home_left">
        <a href="/" className="navbar_logo">
          <img
            src={getImage("navbar_logo")}
            alt="BlockChainExplorer Logo"
            className="navbar_logo_picture"
          />
        </a>
      </div>
      <div className="navbar_home_center">
        <ul className="navbar_home_center_links">
          <li>
            <a href="/"> Explore </a>
          </li>
          <li>
            <a href="/"> test 2</a>
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

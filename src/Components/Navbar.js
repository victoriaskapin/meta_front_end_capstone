import { useState } from "react";
import HeaderLogo from "../Assets/littleLemonHeader.png"
import './ComponentsStyle.scss';
import ListItem from "./ListItem";

function Navbar(props) {
  const paths = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
    "Login",
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = ()=>{
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={`Navbar ${menuOpen?"open":""}`}>
      <img src={HeaderLogo} alt="little lemon icon"/>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen?"visible":""}`}>
        {paths.map((path) => {return <ListItem path={path} key={path} />})}
      </ul>
    </nav>
  );
}

export default Navbar;

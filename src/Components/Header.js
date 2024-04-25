import { Children } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../Assets/restauranfood.jpg";
import './ComponentsStyle.scss';

function Header(props) {

    return (
      <header className="Header">
        <section>
          <div className="banner">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <Link to="/reservations"><button aria-label='On Click'> Reserve table</button></Link>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="a person holding a plate filled with bruschettas" />
          </div>
        </section>
      </header>
    );
  }
  
  export default Header;
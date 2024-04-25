import logo from "../Assets/Logo .svg";
import './ComponentsStyle.scss';
import ListItem from "./ListItem";

function Footer(props) {
  const paths = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
    "Login",
  ];
  const socialLinks = [
    'Facebook',
    'Instagram',
    'Twitter'
  ]

    return (
      <footer className="Footer">
        <section>
          <div className="company-info">
            <img src={logo} alt="logo of little lemon"/>
            <p>We are a family owned restaurant, focused on traditional recipes servred with a modern twist.</p>
          </div>
          <div>
            <h3>Important Links</h3>
            <ul>
              {paths.map((path) => {return <ListItem path={path} key={path} />})}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>Adress: <br/> 123 Siempre viva, USA</li>
              <li>Phone: <br/>  ++03 034 567</li>
              <li>Email: <br/> contact@littlelemon.com</li>
            </ul>
          </div>
          <div>
            <h3>Social Media Links</h3>
            <ul>
              {socialLinks.map((path) => {return <ListItem path={path} key={path} />})}
            </ul>
          </div>
        </section>
      </footer>
    );
  }
  
  export default Footer;
import Header from "../Components/Header"
import Menu from './Menupage'
import Footer from "../Components/Footer";

function MainPage() {

  return (
    <main className="MainPage">
      <Header id="header-component"></Header>
      <Menu id="menu-component"></Menu>
      <Footer id="footer-component"></Footer>
    </main>
  );
}

export default MainPage;
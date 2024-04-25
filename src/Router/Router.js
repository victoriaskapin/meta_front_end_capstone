import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/mainPage";
import About from "../pages/about";
import Menu from "../pages/Menupage";
import Reservations from "../pages/reservations";
import OrderOnline from "../pages/order_online";
import Login from "../pages/login";
import ErrorPage from "../pages/ErrorPage";

const Paths = {
    home: "/",
    home2: 'home',
    about: 'about',
    menu: 'menu',
    reservations: 'reservations',
    order_online: 'order online',
    login: 'login'
  }

function Router(){
    return(
        <Routes>
            <Route path={Paths.home} element={<MainPage/>} />
            <Route path={Paths.home2} element={<MainPage/>} />
            <Route path={Paths.about} element={<About/>} />
            <Route path={Paths.menu} element={<Menu/>} />
            <Route path={Paths.reservations} element={<Reservations/>} />
            <Route path={Paths.order_online} element={<Menu/>} />
            <Route path={Paths.login} element={<Login/>} />
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
}
export default Router;
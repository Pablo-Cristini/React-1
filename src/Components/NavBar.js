import '../App.css';
import './styles.css';
import logo from '../img/logo.png';
import LocalMallIcon from './CartWidget/CartWidget';
import { Nav } from './Nav.js/Nav';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () =>{

    const categorias = [
        {id: 0, nombre: "men's fashion", ruta:"/categoria/men's fashion"},
        {id: 1, nombre: "women's fashion", ruta:"/categoria/women's fashion"},
        {id: 2, nombre: "bags & shoes", ruta:"/categoria/bags & shoes"},
        {id: 3, nombre: "computers", ruta:"/categoria/computers"},
    ]

    return (
        <header>
            <Link to={'/'}><h1>HOME</h1></Link>
            <Nav categorias={categorias}/>
            <Link to={'/cart'}><LocalMallIcon/></Link>
        </header>
    )
}
export default NavBar;


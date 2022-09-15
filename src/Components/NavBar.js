import '../App.css';
import './styles.css';
import logo from '../img/logo.png';
import LocalMallIcon from './CartWidget/CartWidget';

const NavBar = () =>{
    return (
    <header>
    <img className='imgLogo' src= { logo } alt='logo' />
    <h1 className='title'>Soy un Titulo</h1>
    <nav className='nav'>
        <a className='tags' href='www.youtube.com'>Inicio</a>
        <a className='tags' href='www.youtube.com'>Galeria</a>
        <a className='tags' href='www.youtube.com'>Nosotros</a>
        <LocalMallIcon/>
    </nav>
    </header>
    )
}
export default NavBar;

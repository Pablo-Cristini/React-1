import '../App.css';
import './styles.css';
import logo from '../img/logo.png';

export const Navegacion = () =>{
    return (
    <header>
    <img className='imgLogo' src= { logo } alt='logo' />
    <h1 className='title'>Soy un Titulo</h1>
    <h2 className='navegacion'></h2>
    <nav className='nav'>
        <a className='tags' href=''>Inicio</a>
        <a className='tags' href=''>Galeria</a>
        <a className='tags' href=''>Nosotros</a>
    </nav>
    </header>
    )
}

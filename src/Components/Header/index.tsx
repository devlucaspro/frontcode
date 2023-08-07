import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {

  function handleMenu() {
    let ulElement = document.getElementById('menu') as HTMLUListElement;
    ulElement.classList.toggle('active');

    let spanElement = document.getElementById('btn-span') as HTMLSpanElement;
    spanElement.classList.toggle('slider-icon');
  }

  return (
    <header className='container'>
      <Link to='/'>
        <img src="./assets/logo.png" alt="Frontcode Logo" />
        <p>Frontcode</p>
      </Link>
      <ul id='menu'>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Doc</a></li>
        <li><a href="#">About Us</a></li>
        <Link className='btn btn-login-mobile' to='/login'>Start</Link>
      </ul>
      <Link className='btn' to='/login'>Start</Link>
      <button onClick={handleMenu}>Menu 
        <div>
          <span id='btn-span'>
            <i className='fa-solid fa-bars'></i>
            <i className='fa-solid fa-xmark'></i>
          </span>
        </div>
        </button>
    </header>
  )
}

export default Header;
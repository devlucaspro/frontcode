import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {

  useEffect(() => {
    gsap.from('.header-gsap-animation', {
      duration: 1,
      opacity: 0,
      stagger: .2,
      y: -5,
    });
  }, []);



  function handleMenu() {
    let ulElement = document.getElementById('menu') as HTMLUListElement;
    ulElement.classList.toggle('active');

    let spanElement = document.getElementById('btn-span') as HTMLSpanElement;
    spanElement.classList.toggle('slider-icon');
  }

  return (
    <header className='container'>
      <Link to='/' className='header-gsap-animation'>
        <img src="./assets/logo.png" alt="Frontcode Logo" />
        <p>Frontcode</p>
      </Link>
      <ul id='menu'>
        <li className='header-gsap-animation'><Link to="/projects">Projects</Link></li>
        <li className='header-gsap-animation'><Link to="/doc">Doc</Link></li>
        <li className='header-gsap-animation'><Link to="/about">About Us</Link></li>
        <Link className='btn btn-login-mobile' to='/login'>Start</Link>
      </ul>
      <Link className='btn header-gsap-animation' to='/login'>Start</Link>
      <button onClick={handleMenu} className='header-gsap-animation'>Menu 
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
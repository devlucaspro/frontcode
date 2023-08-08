import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import './home.scss';
import DivInline from '../../Components/DivInline';
import Project from '../../Components/Project';

const Home = () => {
  return (
    <>
      <Header />
      <main className='container main-container'>

        <div className='svg-container'>

          <svg className='svg-1' xmlns="http://www.w3.org/2000/svg" width="62" height="61" viewBox="0 0 62 61" fill="none">
            <path d="M41.125 45.5938L56.2188 30.5L41.125 15.4063" stroke="url(#paint0_linear_15_4854)" stroke-width="5.03125" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 15.4063L5.90625 30.5L21 45.5938" stroke="url(#paint1_linear_15_4854)" stroke-width="5.03125" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear_15_4854" x1="48.6719" y1="15.4063" x2="48.6719" y2="45.5938" gradientUnits="userSpaceOnUse">
                <stop stop-color="#925FF0"/>
                <stop offset="1" stop-color="#925FF0" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint1_linear_15_4854" x1="13.4531" y1="15.4063" x2="13.4531" y2="45.5938" gradientUnits="userSpaceOnUse">
                <stop stop-color="#925FF0"/>
                <stop offset="1" stop-color="#925FF0" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>

          <svg className='svg-2' xmlns="http://www.w3.org/2000/svg" width="61" height="62" viewBox="0 0 61 62" fill="none">
            <path d="M55.4688 30.875H45.4062L37.8594 53.5156L22.7656 8.23438L15.2188 30.875H5.15625" stroke="url(#paint0_linear_15_4859)" stroke-width="5.03125" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear_15_4859" x1="30.3125" y1="8.23437" x2="30.3125" y2="53.5156" gradientUnits="userSpaceOnUse">
                <stop stop-color="#925FF0"/>
                <stop offset="1" stop-color="#925FF0" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>

          <svg className='svg-3' xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
            <path d="M52.9531 38.2969C52.9531 39.6312 52.423 40.911 51.4795 41.8545C50.536 42.798 49.2562 43.3281 47.9219 43.3281H17.7344L7.67188 53.3906V13.1406C7.67188 11.8063 8.20195 10.5265 9.14549 9.58299C10.089 8.63945 11.3688 8.10938 12.7031 8.10938H47.9219C49.2562 8.10938 50.536 8.63945 51.4795 9.58299C52.423 10.5265 52.9531 11.8063 52.9531 13.1406V38.2969Z" stroke="url(#paint0_linear_15_4857)" stroke-width="5.03125" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear_15_4857" x1="30.3125" y1="8.10937" x2="30.3125" y2="53.3906" gradientUnits="userSpaceOnUse">
                <stop stop-color="#925FF0"/>
                <stop offset="1" stop-color="#925FF0" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <img src="./assets/Astronaut.png" alt="Astronaut bg" />
        <div>
          <h3>Welcome to our Coding website</h3>
          <h1>Front Code</h1>
          <a href="#section-2">Scroll</a>
        </div>
      </main>
      <DivInline />
      <Project h2={true} />
      <Footer />
    </>
  )
}

export default Home
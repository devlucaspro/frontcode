import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import './about.scss';

const About = () => {
  return (
    <>
      <Header />
      <div className="container about-container">
        <h2>About Us</h2>
        <p>
          This is a project made by <a target='blank' href="https://lucasdeveloper.netlify.app/"><span className='green'>Lucas Ribeiro </span></a>
          he is a web developer with more than a year in web development turning ideas into success, he is also a UI Designer.
        </p>

        <p>
          This application was created to help new web developers to change from scratch the designs into code.
        </p>

        <a className='btn' target='blank' href="https://www.linkedin.com/in/devlucaspro">See more about the creator</a>
      </div>
      <Footer />
    </>
  )
}

export default About;
import './footer.scss';

const Footer = () => {
  return (
    <footer className='container'>
      <div className="texts">
        <h3>Dev</h3>
        <h2>Send me a message for more cool stuff</h2>
        <a href="https://www.instagram.com/ribeiroo.dev">Instagram<span className="green">.</span></a>
        <a href="https://github.com/devlucaspro">Github<span className="green">.</span></a>
        <a href="https://www.linkedin.com/in/devlucaspro">LinkedIn<span className="green">.</span></a>
      </div>
      <h4>#Coding is Life</h4>
    </footer>
  )
}

export default Footer;
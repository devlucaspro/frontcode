import { useEffect, useState } from 'react';
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { useLocation } from "react-router-dom";
import './currentproject.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Project {
  title: string;
  description: string;
  image: string;
  mockup1: string;
}

const CurrentProject = () => {

  const [currentPath, setCurrentPath] = useState<string | undefined>();
  const path = useLocation();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    console.log(path.pathname);

    if(path.pathname === '/p1') {
      setCurrentPath('p1')
    }
    if(path.pathname === '/p2') {
      setCurrentPath('p2')
    }
    if(path.pathname === '/p3') {
      setCurrentPath('p3')
    }
    if(path.pathname === '/p4') {
      setCurrentPath('p4')
    }
  }, [path.pathname]);

  useEffect(() => {
    gsap.from('.text-current', {
      duration: 1.5,
      opacity: 0,
      x: 10,
      stagger: .5,
    })
    gsap.from('.img-current', {
      duration: 1.5,
      opacity: 0,
      x: 10,
    })
  }, []);

  const projectsObject: Record<string, Project> = {
    p1: {
      title: 'Ioland',
      description: '<span class="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> Nunc consequat nisl sit amet convallis varius. Maecenas purus mi, tempor non tempor sed, rutrum a nulla.',
      image: './assets/p1-1.png',
      mockup1: './assets/p1-2.png',
    },
    p2: {
      title: 'Barbacore',
      description: '',
      image: '',
      mockup1: '',
    },
    p3: {
      title: 'Zagat',
      description: '',
      image: '',
      mockup1: '',
    },
    p4: {
      title: 'Finnu',
      description: '',
      image: '',
      mockup1: '',
    },
  }; 

  const selectedProject = projectsObject[currentPath || ''] || {
    title: '',
    description: '',
    image: '',
  }

  return (
    <>
      <Header />
      <section className="container currentProject-container">
        <div className='currentProject-div-texts'>
          <h2 className='text-current'>{selectedProject.title}</h2>
          <p className='text-current' dangerouslySetInnerHTML={{ __html: selectedProject.description }}></p>
          <a className='text-current' href="#" download={''}>Download files 
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M24.5 17.5V22.1667C24.5 22.7855 24.2542 23.379 23.8166 23.8166C23.379 24.2542 22.7855 24.5 22.1667 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V17.5" stroke="black" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.16675 11.6667L14.0001 17.5L19.8334 11.6667" stroke="black" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 17.5V3.5" stroke="black" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        <img className='img-current' src={selectedProject.image} alt={selectedProject.title} />
      </section>
      <section className='container mockup-container'>
        <img src={selectedProject.mockup1} alt={selectedProject.title} />
        <div>
          <h3>{selectedProject.title}</h3>
          <p>Designed by <span className="white">Lucas Ribeiro</span></p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default CurrentProject;
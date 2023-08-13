import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './project.scss'

type ProjectProps = {
  h2: boolean;
}
const Project = ({ h2 }: ProjectProps) => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if(window.innerWidth > 768) {
      gsap.to('.animate', {
        scrollTrigger: {
          trigger: '.animate',
          start: 'center 70%',
          end: 'center 35%',
          scrub: true,
          // markers: true,
        },
        y: 70,
      });
    }    
  }, []);

  const sampleProjects = [
    {
      title: 'P1',
      link: '/p1'
    },
    {
      title: 'P2',
      link: '/p2',
      class: true,
    },
    {
      title: 'P3',
      link: '/p3'
    },
    {
      title: 'P4',
      link: '/p4',
      class: true,
    },
  ]

  return (
    <>
    {h2 && <h2 className='container project-h2'>Some Cool <span className="green">Projects</span> for you</h2>}
    <div className="container project-container">
      {sampleProjects.map((project, index) => {
        return (
          <div className={`project ${project?.class ? `animate` : ''}`} key={index}>
            <img loading='lazy' src="./assets/proj1.png" alt="Project" />
            <div>
              <h4>{project.title}</h4>
              <Link to={project.link}>See Project</Link>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Project;
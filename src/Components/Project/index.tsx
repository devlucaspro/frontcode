import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './project.scss'

type ProjectProps = {
  h2: boolean;
  secondFile?: boolean;
  projectInfo?: boolean;
}
const Project = ({ h2, secondFile, projectInfo }: ProjectProps) => {

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

  const sampleProjects1 = [
    {
      title: 'P1',
      link: '/project/p1',
      cover: './assets/proj1.png',
    },
    {
      title: 'P2',
      link: '/project/p2',
      cover: './assets/proj-extra.png',
      class: true,
    },
    {
      title: 'P3',
      link: '/project/p3',
      cover: './assets/soon-project.png',
    },
    {
      title: 'P4',
      link: '/project/p4',
      cover: './assets/soon-project.png',
      class: true,
    },
  ];

  const sampleProjects2 = [
    {
      title: 'P5',
      link: '/project/p5',
      cover: './assets/soon-project.png',
    },
    {
      title: 'P6',
      link: '/project/p6',
      cover: './assets/soon-project.png',
      class: true,
    },
    {
      title: 'P7',
      link: '/project/p7',
      cover: './assets/soon-project.png',
    },
    {
      title: 'P8',
      link: '/project/p8',
      cover: './assets/soon-project.png',
      class: true,
    },
  ];

  return (
    <>
    {h2 && <h2 className='container project-h2'>Some Cool <span className="green">Projects</span> for you</h2>}
    <div className="container project-container">
      {sampleProjects1.map((project, index) => {
        return (
          <div className={`project ${project?.class ? `animate` : ''}`} key={index}>
            <img loading='lazy' src={project?.cover} alt="Project" />
            {projectInfo &&
            <div>
              <h4>{project.title}</h4>
              <Link to={project.link}>See Project</Link>
            </div>}
          </div>
        )
      })}
    </div>
    {secondFile &&
    <div className="container project-container">
      {sampleProjects2.map((project, index) => {
        return (
          <div className={`project ${project?.class ? `animate` : ''}`} key={index}>
            <img loading='lazy' src={project?.cover} alt="Project" />
            {projectInfo &&
            <div>
              <h4>{project.title}</h4>
              <Link to={project.link}>See Project</Link>
            </div>}
          </div>
        )
      })}
    </div>}
    </>
  )
}

export default Project;
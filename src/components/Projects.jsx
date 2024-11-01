import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'

import { motion } from 'framer-motion'

const projectsData = [
  {
    image: image1,
    title: 'Ironman Kona - Fellipe Santos Fan Art',
    description: 'Sports design study developed for athlete Fellipe Santos at the Ironman World Championship in Kona.',
    technologies: ['Photoshop'],
  },
  {
    image: image2,
    title: 'Saddle Chair - Meta Ads',
    description: 'Design developed for Saddle Chair company, aimed at sales performance on Meta Ads. Generating an average of 2,000+ qualified leads and over 70k in revenue.',
    technologies: ['Photoshop'],
  },
  {
    image: image3,
    title: 'MucoFlow Criteria - Product Launch',
    description: 'Design for the launch of a dental product for the company Criteria Biomaterials.',
    technologies: ['Photoshop', 'Dimension'],

  },
  {
    image: image4,
    title: 'Sales Campaign - Criteria Biomaterials',
    description: 'Alexa bonus campaign for Criteria Biomaterials distributors',
    technologies: ['Photoshop'],
  },
  {
    image: image5,
    title: 'Training Live - Criteria Biomaterials',
    description: 'Launch Card for Product Live, by Criteria Biomaterials.',
    technologies: ['Photoshop', 'Dimension'],
  },
]

const ProjectCard = ({project}) => {
  return (
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
      <img src={project.image} className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]' />

      <div className='flex flex-col gap-5'> 

        <div className='flex flex-col gap-3'>
          <div className='text-xl font-semibold'>{project.title}</div>
          <p className='text-gray-400'>{project.description}</p>
        </div>

        <div className='flex flex-wrap gap-5'>
          {
            project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className='rounded-lg bg-black p-3'
              >
                {tech}
              </span>
            ))
          }
        </div>

      </div>
    </div>
  )
}

const ScrollReveal = ({children}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}


const Projects = () => {
  return (
    <ScrollReveal>
      <div id='projects' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'>
        <h1 className='text-5xl font-light text-white md:text-6xl mb-20'>
          Projects
        </h1>
          <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
            {
              projectsData.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  project={project} 
                />
              ))
            }
          </div>
        
      </div>
    </ScrollReveal>
  )
}

export default Projects;
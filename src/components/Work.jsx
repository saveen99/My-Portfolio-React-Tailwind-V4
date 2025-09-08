/**
* @copyright 2025 Saveen Maduranga
*/

/**
* Components & images
*/
import ProjectCard from "./ProjectCard";
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.png'
import project4 from '../assets/images/project-4.png'
import project5 from '../assets/images/project-5.png'
import project6 from '../assets/images/project-6.png'

const works = [
  {
    imgSrc: project1,
    title: 'AASL - Training Management System',
    tags: ['Laravel', 'Talwind', 'MySQL'],
    projectLink: ''
  },
  {
    imgSrc: project2,
    title: 'AASL - Key Management System Mobile App',
    tags: ['Kotlin', 'SQLite', 'Android Studio'],
    projectLink: 'https://github.com/saveen99/key-management-mobile-kotlin.git'
  },
  {
    imgSrc: project3,
    title: 'Hardware Management Web System (WPL Trading)',
    tags: ['JavaScript', 'PHP', 'MySQL'],
    projectLink: 'https://github.com/saveen99/Ecommerce-website-wplTrading.git'
  },
  {
    imgSrc: project4,
    title: 'E-commerce website',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    projectLink: 'https://shevononlinemart.vercel.app/'
  },
  {
    imgSrc: project5,
    title: 'Car Service website ( Sasik Service Station )',
    tags: ['React', 'Tailwind CSS', 'Firebase'],
    projectLink: 'https://github.com/saveen99/sasik-car-care.git'
  },
  {
    imgSrc: project6,
    title: 'Restaurant Landing Page',
    tags: ['React', 'CSS'],
    projectLink: 'https://github.com/saveen99/Restaurant-landing-page-React.git'
  },
];


const Work = () => {
  return (
    <section 
      id="work"
      className="section"
    >
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] ">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
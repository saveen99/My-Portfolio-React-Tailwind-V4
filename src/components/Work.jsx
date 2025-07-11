/**
* @copyright 2025 Saveen Maduranga
*/

/**
* Components
*/
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/images/project-1.jpeg',
    title: 'AASL - Training Management System',
    tags: ['Laravel', 'Talwind', 'MySQL'],
    projectLink: 'https://musify-5al0.onrender.com/'
  },
  {
    imgSrc: '/images/project-2.jpeg',
    title: 'AASL - Key Management System Mobile App',
    tags: ['Kotlin', 'SQLite', 'Android Studio'],
    projectLink: 'https://pixstock-official.vercel.app/'
  },
  {
    imgSrc: '/images/project-3.png',
    title: 'Hardware Management Web System (WPL Trading)',
    tags: ['JavaScript', 'PHP', 'MySQL'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-4.png',
    title: 'E-commerce website',
    tags: ['React', 'Tailwind CSS'],
    projectLink: 'https://github.com/codewithsadee-org/wealthome'
  },
  {
    imgSrc: '/images/project-5.png',
    title: 'Car Service website ( Sasik Service Station )',
    tags: ['React', 'Tailwind CSS', 'Firebase'],
    projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
  },
  {
    imgSrc: '/images/project-6.png',
    title: 'Restaurant Landing Page',
    tags: ['React', 'CSS'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
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
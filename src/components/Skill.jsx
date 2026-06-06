/**
* @copyright 2025 Saveen Maduranga
*/

/**
 * Components & images
 */
import SkillCard from "./SkillCard";
import js from '../assets/images/javascript.svg'
import react from '../assets/images/react.svg'
import tailwind from '../assets/images/tailwindcss.svg'
import mysql from '../assets/images/mysql.svg'
import jira from '../assets/images/jira.svg'
import ps from '../assets/images/photoshop.svg'
import illustrator from '../assets/images/illustrator.svg'
import canva from '../assets/images/canva.svg'

const skillItem = [
  {
    imgSrc: ps,
    label: 'Adobe Photoshop',
    desc: 'Design & Editing Tool'
  },
  {
    imgSrc: js,
    label: 'JavaScript',
    desc: 'Programming Language'
  },
  {
    imgSrc: react,
    label: 'React JS',
    desc: 'Frontend Library'
  },
  {
    imgSrc: illustrator,
    label: 'Adobe illustrator',
    desc: 'Vector Design Software'
  },
  {
    imgSrc: canva,
    label: 'Canva',
    desc: 'Online Design Platform'
  },
  {
    imgSrc: tailwind,
    label: 'Tailwind CSS',
    desc: 'CSS Framework'
  },
  {
    imgSrc: mysql,
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: jira,
    label: 'Jira',
    desc: 'Project Management Tool'
  },
];

const Skill = () => {
  return (
    <section 
      id="skill"
      className="section"
    >
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8
            max-w-[50ch] reveal-up">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill
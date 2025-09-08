/**
* @copyright 2025 Saveen Maduranga
*/

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React JS',
    desc: 'Frontend Library'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'Tailwind CSS',
    desc: 'CSS Framework'
  },
  {
    imgSrc: '/images/typescript.svg',
    label: 'TypeScript',
    desc: 'Superset of JavaScript'
  },
  {
    imgSrc: '/images/redux.svg',
    label: 'Redux Tool kit',
    desc: 'State Management Tool'
  },
  {
    imgSrc: '/images/nextjs.svg',
    label: 'Next JS',
    desc: 'Full-Stack Framework'
  },
  {
    imgSrc: '/images/mysql.svg',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: '/images/jira.svg',
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
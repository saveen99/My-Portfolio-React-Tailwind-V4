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
import ts from '../assets/images/typescript.svg'
import redux from '../assets/images/redux.svg'
import next from '../assets/images/nextjs.svg'
import mysql from '../assets/images/mysql.svg'
import jira from '../assets/images/jira.svg'
import Kotlin from '../assets/images/Kotlin.svg'
import Flutter from '../assets/images/Flutter.svg'
import Dart from '../assets/images/Dart.svg'
import SQLite from '../assets/images/SQLite.svg'

const skillItem = [
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
    imgSrc: tailwind,
    label: 'Tailwind CSS',
    desc: 'CSS Framework'
  },
  {
    imgSrc: ts,
    label: 'TypeScript',
    desc: 'Superset of JavaScript'
  },
  {
    imgSrc: redux,
    label: 'Redux Tool kit',
    desc: 'State Management Tool'
  },
  {
    imgSrc: next,
    label: 'Next JS',
    desc: 'Full-Stack Framework'
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
  {
    imgSrc: Kotlin,
    label: 'Kotlin',
    desc: 'Programming Language'
  },
  {
    imgSrc: Flutter,
    label: 'Flutter',
    desc: 'UI Framework'
  },
  {
    imgSrc: Dart,
    label: 'Dart',
    desc: 'Programming Language'
  },
  {
    imgSrc: SQLite,
    label: 'SQLite',
    desc: 'Database Engine'
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
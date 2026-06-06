/**
* @copyright 2025 Saveen Maduranga
*/

import logo from '../assets/images/logo.png'

const aboutItems = [
  {
    label: 'Project done',
    number: 10
  },
  {
    label: 'Years of experience',
    number: 1.5
  }
];

const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl
        md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-lg
          md:max-w-[70ch] text-justify tracking-tight">
            Welcome! I&apos;m Saveen, an ICT professional skilled in Software Development, Web Development, Graphic Design, and Social Media Management. I create modern, responsive, and user-friendly digital solutions by combining creativity with clean and efficient coding practices. 
            I enjoy building websites, designing visuals, and managing digital content to deliver impactful and engaging results across different platforms.
          </p>
          <div className="flex flex-wrap items-center gap-4
          md:gap-7">
            {
              aboutItems.map(({ label, number}, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img 
            src={logo} 
            alt="Logo"
            width={30}
            height={30}
            className="ml-auto md:w-[40px] md:h-[40px]" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
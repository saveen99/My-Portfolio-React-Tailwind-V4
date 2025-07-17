/**
* @copyright 2025 Saveen Maduranga
*/

const aboutItems = [
  {
    label: 'Project done',
    number: 10
  },
  {
    label: 'Years of experience',
    number: 1
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
            Welcome! I&apos;m Saveen, a passionate Software Engineer with a talent for building efficient, scalable, and user-friendly applications.
            Blending problem-solving skills with technical precision, I bring your ideas to life through clean code, smart architecture, and seamless functionality. Whether it&apos;s front-end, back-end, or full-stack development — I deliver robust solutions that perform as great as they look.
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
            src="/images/logo.png" 
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
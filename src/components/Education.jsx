/**
* @copyright 2025 Saveen Maduranga
*/

/**
 * Components & images
 */
import EducationCard from "./EducationCard";
import nibm from "../assets/images/nibm.png";
import school from "../assets/images/school.jpg";

const educationItem = [
  {
    logo: nibm,
    title: "Higher National Diploma in Software Engineering",
    institute: "National Institute of Business Management (NIBM)",
    date: "Jul 2023 - Jul 2024"
  },
  {
    logo: nibm,
    title: "Diploma in Software Engineering",
    institute: "National Institute of Business Management (NIBM)",
    date: "April 2022 - Jun 2023"
  },
  {
    logo: school,
    title: "G.C.E Advanced Level",
    institute: "Maliyadeva College",
    date: "2010 - 2018"
  }
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Education Qualification</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          My academic journey reflects my commitment to continuous learning and building a strong foundation in computing and software engineering.
        </p>

        {/* Changed grid to flex column */}
        <div className="flex flex-col gap-4">
          {educationItem.map(({ logo, title, institute, date }, key) => (
            <EducationCard
              key={key}
              logo={logo}
              title={title}
              institute={institute}
              date={date}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

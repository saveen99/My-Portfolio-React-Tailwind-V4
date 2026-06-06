/**
 * @copyright 2025 Saveen Maduranga
 */

/**
 * Components & Images
 */
import DesignCard from "./DesignCard";

import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";

const design = [
  { imgSrc: project1 },
  { imgSrc: project2 },
  { imgSrc: project3 },
  { imgSrc: project4 },
  { imgSrc: project5 },
  { imgSrc: project6 },
];

const Design = () => {
  return (
    <section
      id="design"
      className="section"
    >
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          Social Media Designs
        </h2>

        <div className="grid gap-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {design.map(({ imgSrc }, key) => (
            <DesignCard
              key={key}
              imgSrc={imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Design;
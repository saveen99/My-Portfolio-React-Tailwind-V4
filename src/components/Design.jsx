import { useState } from "react";
import DesignCard from "./DesignCard";

import design1 from "../assets/images/design-1.png";
import design2 from "../assets/images/design-2.png";
import design3 from "../assets/images/design-3.png";
import design4 from "../assets/images/design-4.png";
import design5 from "../assets/images/design-5.png";
import design6 from "../assets/images/design-6.png";
import design7 from "../assets/images/design-7.png";
import design8 from "../assets/images/design-8.png";
import design9 from "../assets/images/design-9.png";
import design10 from "../assets/images/design-10.png";
import design11 from "../assets/images/design-11.png";
import design12 from "../assets/images/design-12.png";

const design = [
  { imgSrc: design3 },
  { imgSrc: design4 },
  { imgSrc: design5 },
  { imgSrc: design6 },
  { imgSrc: design7 },
  { imgSrc: design8 },
  { imgSrc: design10 },
  { imgSrc: design11 }
];

const Design = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="design" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          A few social media design works
        </h2>

        {/* GRID (ALL SAME SIZE) */}
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {design.map(({ imgSrc }, key) => (
            <div
              key={key}
              onClick={() => setSelectedImage(imgSrc)}
              className="cursor-pointer"
            >
              <DesignCard imgSrc={imgSrc} />
            </div>
          ))}
        </div>
      </div>

      {/* MODAL - ORIGINAL IMAGE */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Design;
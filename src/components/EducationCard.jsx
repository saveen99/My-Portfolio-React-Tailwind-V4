/**
* @copyright 2025 Saveen Maduranga
*/

import PropTypes from "prop-types";

const EducationCard = ({ logo, title, institute, date, classes }) => {
  return (
    <div
      className={
        "flex items-center gap-4 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-4 hover:bg-zinc-800 transition-colors group " +
        classes
      }
    >
      {/* Logo */}
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-14 h-14 p-2 flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
        <img src={logo} alt={institute} className="object-contain w-10 h-10" />
      </figure>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-zinc-300 text-sm">{institute}</p>
        <p className="text-zinc-500 text-xs mt-1">{date}</p>
      </div>
    </div>
  );
};

EducationCard.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  institute: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  classes: PropTypes.string
};

export default EducationCard;

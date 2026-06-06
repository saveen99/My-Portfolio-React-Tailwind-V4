/**
 * @copyright 2025 Saveen Maduranga
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

const DesignCard = ({
  imgSrc,
  classes
}) => {
  return (
    <div
      className={
        "rounded-2xl overflow-hidden bg-zinc-800 ring-1 ring-inset ring-zinc-50/5 " +
        classes
      }
    >
      <img
        src={imgSrc}
        alt="Design Preview"
        loading="lazy"
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

DesignCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default DesignCard;
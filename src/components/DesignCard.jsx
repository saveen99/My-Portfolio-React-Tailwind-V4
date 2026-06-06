import PropTypes from "prop-types";

const DesignCard = ({ imgSrc }) => {
  return (
    <div className="w-full aspect-square overflow-hidden rounded-2xl bg-zinc-800">
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
};

export default DesignCard;
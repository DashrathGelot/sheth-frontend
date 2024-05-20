const IconButton = ({ iconSrc, altText, onClick }) => {
  return (
    <button className="text-primary focus:outline-none pl-5" onClick={onClick}>
      <img src={iconSrc} alt={altText} className="w-5 h-5" />
    </button>
  );
};

export default IconButton;

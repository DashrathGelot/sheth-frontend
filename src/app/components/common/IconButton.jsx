const IconButton = ({ iconSrc, altText, onClick, left, right }) => {
  return (
    <button className="text-primary focus:outline-none pl-3 flex items-center justify-center" onClick={onClick}>
      {right && <span className="ml-6">{right}</span>}
      <img src={iconSrc} alt={altText} className="w-5 h-5" /> 
      {left && <span className="ml-6">{left}</span>}
    </button>
  );
};

export default IconButton;

const IconButton = ({ iconSrc, altText, onClick, left, right, className }) => {
  return (
    <button id="iconButton" className={`text-primary focus:outline-none pl-3 flex items-center justify-center ${className && className}`} onClick={onClick}>
      {right && <span className="mr-4">{right}</span>}
      <img src={iconSrc} alt={altText} className="w-5 h-5" /> 
      {left && <span className="ml-6">{left}</span>}
    </button>
  );
};

export default IconButton;

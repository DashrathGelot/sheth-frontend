const IconButton = ({ iconSrc, altText, onClick }) => {
  return (
    <button className="text-primary focus:outline-none mr-2" onClick={onClick}>
      <img src={iconSrc} alt={altText} className="w-6 h-6" />
    </button>
  );
};

export default IconButton;

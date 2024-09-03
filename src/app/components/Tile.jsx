const Tile = ({ image, title, text, noShadow }) => {
  return (
    <div className="w-full p-4">
      <div className={`bg-white  ${noShadow ? 'shadow-none' : 'shadow-lg' } rounded-lg overflow-hidden`}>
        <img className="w-full h-auto" src={image} alt={title} />
      </div>
      {text && <p className="text-center p-2">{text}</p>}
    </div>
  );
};

export default Tile;

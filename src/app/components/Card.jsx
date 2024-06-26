import Tile from "./Tile";

const Card = ({ image, title, price, name }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Tile image={image} title={title} />
        <div className="p-4">
          {name && <h2 className="font-bold text-lg">{name}</h2>}
          {price && (
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-700">₹{price}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

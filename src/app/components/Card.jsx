import Link from "next/link";
import Tile from "./Tile";

const CardCommon = ({ image, title, price, name }) => {
  return <div className="bg-white shadow-sm rounded-lg overflow-hidden border">
    <Tile image={image} title={title} noShadow={true}/>
    <div className="p-4">
      {name && <h2 className="font-bold text-lg">{name}</h2>}
      {price && (
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-700">₹{price}</span>
        </div>
      )}
    </div>
  </div>;
}

const Card = ({ href, image, title, price, name }) => {
  if (href) {
    return <Link href={href} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <CardCommon image={image} title={title} price={price} name={name}/>
    </Link>
  }
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <CardCommon image={image} title={title} price={price} name={name}/>
    </div>
  );
};

export default Card;

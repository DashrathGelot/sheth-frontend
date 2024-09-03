import IconButton from "@/app/components/common/IconButton";
import { BAG_PRODUCT_QOUNTITY } from "@/app/constant/staticResources";

export default function Product({product, onRemove}) {
    return <div className='flex flex-row justify-between'>
      <div className="w-full md:w-2/5">
        <img src={product.images[0]} alt={product.title}/>
      </div>
      <div className='w-[55%] flex flex-col justify-around'>
        <div>
          <div className='flex flex-row justify-between sm:mb-6 border-b pb-4'>
            <h2 className="w-2/3 text-xl font-normal tracking-tight text-neutral-900">{product.title}</h2>
            <IconButton onClick={onRemove} className="w-7 h-7" iconSrc={"/cross.svg"}/>
          </div>
          <div className='flex flex-row justify-between'>
            <p>Color</p>
            <p>{product.color}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p>Size</p>
            <p>{product.size}</p>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <select className="border border-gray-300 rounded p-2 focus:outline-none">
            {BAG_PRODUCT_QOUNTITY.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p>₹ {product.price}</p>
        </div>
      </div>
  </div>;
}
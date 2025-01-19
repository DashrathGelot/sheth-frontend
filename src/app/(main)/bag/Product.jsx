import IconButton from "@/app/components/common/IconButton";
import { BAG_PRODUCT_QOUNTITY } from "@/app/constant/staticResources";

export default function Product({product, onRemove}) {
    return <div className='flex flex-row sm:justify-between gap-1 sm:gap-0 p-1 my-4 border-b rounded sm:border-none sm:my-0'>
      <div className="w-1/3 sm:w-2/5">
        <img src={product.images[1]} alt={product.title}/>
      </div>
      <div className='w-[64%] sm:w-[55%] flex flex-col justify-around'>
        <div>
          <div className='flex flex-row justify-between mb-2 sm:mb-6 border-b pb-1 sm:pb-4'>
            <h2 className="sm:w-2/3 sm:text-xl font-normal tracking-tight text-neutral-900">{product.title}</h2>
            <IconButton onClick={onRemove} className="w-6 h-6 sm:w-7 sm:h-7" iconSrc={"/cross.svg"}/>
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
        <div className='flex flex-row justify-between items-center'>
          <select className="border border-gray-300 rounded p-1 sm:p-2 focus:outline-none text-[0.79rem] sm:text-[100%]">
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
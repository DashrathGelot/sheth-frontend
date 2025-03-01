import { useState } from "react";
import IconButton from "@/app/components/common/IconButton";
import OrderStatus from "./OrderStatus";

const OrderCard = ({ order }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="p-4 mb-6 shadow-md border rounded-lg">
            <div className="flex gap-4">
                <div className='sm:self-center sm:w-48 sm:h-full w-32 h-32'>
                    <img src={order.image} alt={order.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col w-full">
                    <div className="hidden sm:block">
                        <OrderStatus status={order.status} />
                    </div>
                    <h2 className="text-lg font-semibold sm:ml-12">{order.name}</h2>
                    {order.size && <p className="text-gray-500 sm:ml-12">Size: {order.size}</p>}
                    {order.color && <p className="text-gray-500 sm:ml-12">Color: {order.color}</p>}                   
                    {order.expectedDelivery && <p className="text-gray-500 mb-4 sm:ml-12">Est. Delivery: {order.expectedDelivery}</p>}
                    <div onClick={() => setExpanded(!expanded)} className="sm:hidden flex gap-4 justify-between items-center bg-gray-200 px-4 py-2 rounded-lg text-sm mb-1 transition-all duration-300">
                        <span className='font-semibold'>{order.status}</span>
                        <IconButton className={'w-7 h-6'} iconSrc={`${expanded ? './up-chevron.svg' : './down-chevron.svg'}`}/>
                    </div>
                    <div className={`sm:hidden overflow-hidden transition-all duration-300 ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <OrderStatus status={order.status} />
                    </div>
                    {/* <button className="sm:ml-12 sm:w-1/2 bg-gray-200 px-2 py-1 rounded-lg">Cancel Order</button> */}
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
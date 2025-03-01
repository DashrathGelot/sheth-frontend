'use client';
import { useEffect, useState } from 'react';
import OrderCard from './OrderCard';
import rest from '@/app/services/rest';
import { HttpMethod, paths } from '@/app/constant/urlResource';
import Loading from './loading';

export default function OrdersPage() {
    const [orders, setOrders] = useState(undefined);

    useEffect(() => {
        async function fetchOrders() {
            const data = await rest(HttpMethod.GET, paths.ORDERS);
            setOrders(data.products);
        }
        fetchOrders();
    }, []);

    return (
        <div className="sm:max-w-3xl sm:mx-auto mx-3">
            <div className='my-4 sm:my-8'>
                <h1 className="text-xl sm:text-2xl font-semibold">My Orders</h1>
            </div>
            {
                !orders ? <Loading/> : orders.length > 0 ? 
                    orders.map(order => <OrderCard key={order.id} order={order} />) :
                    <div className="mt-12 text-center">
                        <h2 className="mt-4 text-2xl font-semibold text-gray-600">No Orders Yet</h2>
                        <p className="text-gray-500 mt-2">You haven't placed any orders yet. Start shopping now!</p>
                    </div>
            }
        </div>
    );
}

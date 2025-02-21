'use client';

const Stepper = ({ currentStep, steps }) => {
    return (
        <div className="p-6">
            <div className="flex justify-center space-x-4">
                {steps.map((label, index) => (
                    <div key={index} className="flex items-center">
                        <div
                            className={`step flex flex-col items-center ${index <= currentStep ? 'text-blue-600' : 'text-gray-400'
                                }`}
                        >
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${index === currentStep
                                    ? 'bg-blue-600 text-white'
                                    : index < currentStep
                                        ? 'bg-blue-400 text-white'
                                        : 'bg-gray-300'
                                    }`}
                            >
                                {index + 1}
                            </div>
                            <span className="mt-2 text-sm">{label}</span>
                        </div>

                        {index < steps.length - 1 && (
                            <div
                                className={`h-1 w-10 transition-all ${index < currentStep ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                            ></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function OrderPage() {
    const orders = [
        {
            id: 1,
            productName: 'Product 2',
            productImage: 'https://picsum.photos/200/300',
            deliveryDate: '2024-03-05',
            status: 'In Transit',
        },
        {
            id: 2,
            productName: 'Product 3',
            productImage: 'https://picsum.photos/200/300',
            deliveryDate: '2024-03-10',
            status: 'Processing',
        },
        {
            id: 3,
            productName: 'Product 1',
            productImage: 'https://picsum.photos/200/300',
            deliveryDate: '2024-02-25',
            status: 'Delivered',
        },
    ];

    const statusSteps = ['Processing', 'In Transit', 'Out for Delivery', 'Delivered'];

    const sortedOrders = orders.sort((a, b) => new Date(b.deliveryDate) - new Date(a.deliveryDate));

    const getStepIndex = (status) => statusSteps.indexOf(status);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-4 md:p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-6 md:p-10">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Your Orders</h1>

                <div className="space-y-6">
                    {sortedOrders.map((order) => (
                        <div
                            key={order.id}
                            className="border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            {order.status !== "Delivered" && (<>
                                <Stepper currentStep={getStepIndex(order.status)} steps={statusSteps} /></>)}
                            <div className="flex flex-col md:flex-row items-center">
                                <img
                                    src={order.productImage}
                                    alt={order.productName}
                                    className="w-32 h-32 object-cover rounded-xl mb-4 md:mb-0 md:mr-6"
                                />
                                <div className="flex-1">
                                    <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                                        {order.productName}
                                    </h2>
                                    <p className="text-gray-600 mb-2 text-lg">
                                        Expected Delivery: <span className="font-medium">{order.deliveryDate}</span>
                                    </p>
                                    <p className="text-gray-700">Status: {order.status}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
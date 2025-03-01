const OrderStatus = ({ status }) => {
    const steps = ['Placed', 'Processed', 'Shipped', 'Delivered'];
    const currentStep = steps.indexOf(status);
    
    return (
        <div className="w-full my-4">
            {/* Horizontal Progress Bar for Larger Screens */}
            <div className="hidden sm:flex flex-col items-center w-full">
                <div className="relative flex items-center w-full">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex items-center justify-around w-full">
                            {index > 0 && (
                                <div className={`absolute left-[-50%] h-1 w-full ${index <= currentStep ? 'bg-black' : 'bg-gray-300'}`}></div>
                            )}
                            <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-bold z-10 ${index <= currentStep ? 'bg-black' : 'bg-gray-300'}`}>{index + 1}</div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between w-full text-sm text-gray-700 mt-2 left-[-100%]">
                    {steps.map((step, index) => (
                        <span key={index} className="w-1/4 text-center">{step}</span>
                    ))}
                </div>
            </div>

            {/* Vertical Progress Bar for Smaller Screens */}
            <div className="sm:hidden flex flex-col items-start relative pl-2">
                {steps.map((step, index) => (
                    <div key={index} className="relative flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-bold ${index <= currentStep ? 'bg-black' : 'bg-gray-300'}`}>{index + 1}</div>
                            {index < steps.length - 1 && (
                                <div className={`w-1 h-7 ${index < currentStep ? 'bg-black' : 'bg-gray-300'}`}></div>
                            )}
                        </div>
                        <span className={`text-gray-700 ml-2 ${index < steps.length - 1 ? 'mt-1': 'self-center'}`}>{step}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderStatus;
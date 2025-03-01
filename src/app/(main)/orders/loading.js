const Loading = () => {
    return (
        <div className="container mx-auto p-4 animate-pulse">
        {[...Array(2)].map((_, index) => (
            <div key={index} className="p-4 mb-6 shadow-md border rounded-lg">
                <div className="flex gap-4">
                    <div className="w-32 bg-gray-300 rounded-md"/>
                    <div className="flex flex-col w-full">
                        <div className="hidden sm:block w-full h-9 bg-gray-300 rounded-md mb-3"></div>
                        <h2 className="sm:w-1/2 w-full h-7 bg-gray-300 rounded-md mb-1"></h2>
                        <p className="sm:w-1/3 w-2/3 h-5 bg-gray-300 rounded-md mb-1"></p>
                        <p className="sm:w-1/3 w-2/3 h-5 bg-gray-300 rounded-md mb-1"></p>              
                        <p className="sm:w-1/2 w-full h-5 bg-gray-300 rounded-md mb-1"></p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
};

export default Loading;
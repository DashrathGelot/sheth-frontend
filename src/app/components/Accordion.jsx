import React, { useState } from "react";

const Accordion = ({ title, children, className }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div className={className}>
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full items-center text-left py-4 font-medium text-gray-700 focus:outline-none">
                <span>{title}</span>
                {accordionOpen ? <span className="text-2xl">-</span> : <span className="text-xl">+</span>}
            </button>
            <div className={`grid overflow-y-hidden transition-all duration-300 ease-in-out text-secondary text-sm ${accordionOpen ? "max-h-24" : "max-h-0"}`}>
                {children}
            </div>
        </div>
    );
};

export default Accordion;

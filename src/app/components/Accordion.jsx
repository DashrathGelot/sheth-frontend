import React, { useState } from "react";

const Accordion = ({ title, details }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div className="py-3 px-2 border rounded my-2">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full">
                <span>{title}</span>
                {accordionOpen ? <span className="text-2xl">-</span> : <span className="text-xl">+</span>}
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-secondary text-sm ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">{details}</div>
            </div>
        </div>
    );
};

export default Accordion;

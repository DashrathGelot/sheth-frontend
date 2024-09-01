"use client";

import { useRef, useState } from "react";
import IconButton from "./IconButton";

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef(null);

    const onOpen = (current) => {
        setIsOpen(!isOpen);
        inputRef.current.focus();
    }

    const onBlur = (e) => {
        if (isOpen && e?.relatedTarget?.id !== "iconButton") {
            setIsOpen(false);
        }
    } 

    return <div className="relative">
        <input type="text"
            className={`bg-white h-10 sm:h-9 px-5 pr-6 sm:pr-9 text-sm border focus:outline-none transition-all duration-300 ease-in-out 
                ${isOpen ? 'border-black rounded-full w-72 min-[390px]:w-[20rem] min-[430px]:w-[22rem] sm:w-80' : 'w-10 sm:w-12 border-none'}`}
            placeholder="Search..."
            onBlur={onBlur}
            ref={inputRef}
        />
        <div className="absolute right-0 top-0 mt-2 sm:mt-1.5 mr-2">
            <IconButton onClick={() => onOpen(isOpen)} iconSrc="/search.svg" altText="search" />
        </div>
    </div>;
}

export default Search;
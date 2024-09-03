export default function Variant({label, isCurrentVariant, isDisabled, onClick, color}) {
    if (color) {
        const bg = `bg-[${color}]`;
        return (
            <div className={`${isCurrentVariant ? "border-2 border-zinc-950" : "border-neutral-200 border" }
                "relative flex min-w-[5ch] items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap rounded p-3 text-sm focus-within:outline focus-within:outline-2"
                cursor-pointer ${bg} min-h-[5ch]`}
                onClick={onClick} 
            ></div>
        );
    }

    return (
        <div className={`${isCurrentVariant ? "border-transparent bg-neutral-900 text-white hover:bg-neutral-800" : "border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100" }
                "relative flex min-w-[5ch] items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap rounded border p-3 text-center text-sm font-semibold focus-within:outline focus-within:outline-2 aria-disabled:cursor-not-allowed aria-disabled:bg-neutral-100 aria-disabled:text-neutral-800 aria-disabled:opacity-50",
                cursor-pointer ${isDisabled && "pointer-events-none"}
                ${color && `bg-[${color}]`}
            `}
            aria-disabled={isDisabled}
            onClick={onClick} 
        >
            {label}
        </div>
    );
}
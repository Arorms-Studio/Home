function Logo() {
    return (
        <svg className="w-16" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
            <circle
                cx="25"
                cy="25"
                r="15"
                fill="none"
                className="stroke-black dark:stroke-white"
                strokeWidth="3"
            />
            <line
                x1="0"
                y1="25"
                x2="50"
                y2="25"
                className="stroke-red-500"
                strokeWidth="3"
            />
        </svg>
    );
}

export default Logo;

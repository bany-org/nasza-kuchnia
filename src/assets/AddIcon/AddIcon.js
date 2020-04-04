import React from "react";

const AddIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="17"
            height="28"
            viewBox="0 0 35 35"
        >
            <g fill="none" fillRule="evenodd">
                <circle cx="17.5" cy="17.5" r="17.5" fill="#FFCD32" />
                <g
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                >
                    <path
                        d="M8.5 0v17V0zM0 8.5h17"
                        transform="translate(9 9)"
                    />
                </g>
            </g>
        </svg>
    );
};

export default AddIcon;

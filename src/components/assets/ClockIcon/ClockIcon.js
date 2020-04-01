import React from "react";

const ClockIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 35 35"
        >
            <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                <circle
                    cx="16.5"
                    cy="16.5"
                    r="16.5"
                    stroke="#FFB803"
                    stroke-width="1.5"
                />
                <circle
                    cx="16.5"
                    cy="16.5"
                    r="12.5"
                    fill="#FFF"
                    stroke="#000"
                    stroke-width="1.5"
                />
                <rect
                    width="1"
                    height="9"
                    x="16"
                    y="7"
                    fill="#000"
                    stroke="#000"
                    stroke-width=".5"
                    rx=".5"
                    transform="matrix(-1 0 0 1 33 0)"
                />
                <path
                    fill="#000"
                    stroke="#000"
                    stroke-width=".5"
                    d="M20.846 20.1L17.9 17.154c-.206-.205-.54-.205-.746 0-.205.206-.205.54 0 .746l2.946 2.946c.206.205.54.205.746 0 .205-.206.205-.54 0-.746z"
                />
                <path
                    fill="#FFB803"
                    stroke="#000"
                    stroke-width="1.5"
                    d="M16.5 15c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z"
                />
            </g>
        </svg>
    );
};

export default ClockIcon;

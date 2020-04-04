import React from "react";

const PersonIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="100%"
            height="28"
            viewBox="0 0 45 50"
        >
            <g
                fill="none"
                fillRule="evenodd"
                stroke="#000"
                transform="translate(0 2)"
            >
                <path
                    fill="#FFF"
                    strokeWidth="2.5"
                    d="M9.5 30.25c-4.556 0-8.25 3.694-8.25 8.25V46c0 .414.336.75.75.75h41c.414 0 .75-.336.75-.75v-7.5c0-4.556-3.694-8.25-8.25-8.25h-26z"
                />
                <circle
                    cx="22"
                    cy="16.667"
                    r="16.667"
                    fill="#FFF"
                    strokeWidth="2.5"
                />
                <path
                    fill="#000"
                    d="M31.115 16.59c-.559 0-1.011-.293-1.011-.655v-1.218c0-.362.452-.655 1.01-.655.559 0 1.012.293 1.012.655v1.218c0 .362-.453.655-1.011.655zM13.422 16.59c-.56 0-1.011-.293-1.011-.655v-1.218c0-.362.452-.655 1.01-.655.559 0 1.012.293 1.012.655v1.218c0 .362-.453.655-1.011.655z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M16.792 20.833c1.094 1.586 3.061 2.643 5.306 2.643 2.225 0 4.178-1.039 5.277-2.601"
                />
            </g>
        </svg>
    );
};

export default PersonIcon;

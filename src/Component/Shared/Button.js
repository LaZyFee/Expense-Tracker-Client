import React from 'react';
import { cn } from '../utils/utils'; // Make sure to import the `cn` utility

const Button = ({ variant = "primary", children }) => {
    return (
        <button
            className={cn(
                "p-2 rounded", // Common classes
                variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-500 text-black", // Conditionally apply variant styles
                "hover:shadow-lg" // Common hover styles
            )}
        >
            {children}
        </button>
    );
};

export default Button;

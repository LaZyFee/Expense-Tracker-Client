// src/components/Button.js
import React from 'react';
import { cn } from '../utils/utils'; // Import the helper

const Button = ({ isPrimary }) => {
    return (
        <button
            className={cn(
                "p-2 rounded",               // Common classes
                isPrimary ? "bg-blue-500" : "bg-gray-500", // Conditionally apply primary or gray background
                "hover:shadow-lg"
            )}
        >
            Click Me
        </button>
    );
};

export default Button;

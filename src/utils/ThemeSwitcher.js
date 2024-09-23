import React, { useState } from 'react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('default'); // Default theme

    const handleThemeChange = (event) => {
        const selectedTheme = event.target.value;
        setTheme(selectedTheme);
        document.documentElement.setAttribute('data-theme', selectedTheme); // Update the data-theme attribute
    };

    return (
        <div className="dropdown mb-72">
            <div tabIndex={0} role="button" className="btn m-1">
                Theme
                <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048">
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
                {['default', 'retro', 'cyberpunk', 'valentine', 'aqua'].map((themeOption) => (
                    <li key={themeOption}>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label={themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                            value={themeOption}
                            checked={theme === themeOption}
                            onChange={handleThemeChange}
                        />
                        <span className="ml-2">{themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ThemeSwitcher;

import React, { Fragment } from 'react';
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    const menuItems = <Fragment>
        <NavLink
            to='/'
            className={({ isActive }) =>
                `px-4 py-2 transition-colors duration-300 ${isActive ? 'font-bold text-blue-500 border-b-2 border-blue-500' : 'text-white hover:text-orange-500 '}`
            }
        >
            Home
        </NavLink>
        <NavLink
            to='/expense'
            className={({ isActive }) =>
                `px-4 py-2 transition-colors duration-300 ${isActive ? 'font-bold text-blue-500 border-b-2 border-blue-500' : 'text-white hover:text-orange-500 '}`
            }
        >
            Add Expense
        </NavLink>
        <NavLink
            to='/statics'
            className={({ isActive }) =>
                `px-4 py-2 transition-colors duration-300 ${isActive ? 'font-bold text-blue-500 border-b-2 border-blue-500' : 'text-white hover:text-orange-500 '}`
            }
        >
            Statics
        </NavLink>
    </Fragment>

    return (
        <div className="navbar shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-24">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl normal-case">Expense-Tracker</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-4">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden navbar-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </label>
        </div>
    );
};

export default Navbar;

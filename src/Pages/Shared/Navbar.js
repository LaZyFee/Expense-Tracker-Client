import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            <Link to='/' className="btn btn-ghost text-xl normal-case">Expense-Tracker</Link>
        </div>
    );
};

export default Navbar;  
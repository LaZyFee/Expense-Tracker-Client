import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Statics = () => {
    return (
        <div>
            <Helmet>
                <title>Statics - Expense Tracker</title>
            </Helmet>
            <div className="flex gap-4 mt-4">
                <Link to="/" className="btn btn-outline btn-secondary">Home</Link>
                <Link to="/expense" className="btn btn-outline btn-secondary">Add Expense</Link>
            </div>

        </div>
    );
};

export default Statics;
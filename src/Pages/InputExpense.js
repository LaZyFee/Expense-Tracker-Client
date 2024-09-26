import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const InputExpense = () => {
    return (
        <div>
            <Helmet>
                <title>Input Expense - Expense Tracker</title>
            </Helmet>
            <div className="flex gap-4 mt-4">
                <Link to="/" className="btn btn-outline btn-secondary">Home</Link>
                <Link to="/statics" className="btn btn-outline btn-secondary">Statics</Link>
            </div>
        </div>
    );
};

export default InputExpense;
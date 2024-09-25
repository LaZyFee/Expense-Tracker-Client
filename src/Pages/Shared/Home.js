import React from 'react';
import { useAuth } from '../../Authentication/auth';

const Home = () => {
    const { user } = useAuth();

    return (
        <div className="flex flex-col items-center justify-center h-screen p-2">
            <h1 className="text-4xl font-bold text-center text-accent">Welcome to Expense Tracker</h1>
            <h3 className="text-2xl mt-4">Let's get started</h3>
            {user ? (
                <h3 className="text-xl mt-2 text-primary">Hello, {user.displayName || user.name} 👋</h3>
            ) : (
                <h3 className="text-xl mt-2 text-secondary">Please log in to see your details.</h3>
            )}
        </div>
    );
};

export default Home;

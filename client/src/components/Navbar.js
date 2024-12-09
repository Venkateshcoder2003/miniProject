import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Home, UserPlus, LogIn } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <Activity className="h-8 w-8" />
                            <span className="font-bold text-xl">Smart Health Advisor</span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            to="/"
                            className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            <Home className="inline-block h-5 w-5 mr-1" />
                            Home
                        </Link>
                        <Link
                            to="/register"
                            className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            <UserPlus className="inline-block h-5 w-5 mr-1" />
                            Register
                        </Link>
                        <Link
                            to="/login"
                            className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            <LogIn className="inline-block h-5 w-5 mr-1" />
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


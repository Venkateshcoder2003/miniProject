// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Activity, Home, UserPlus, LogIn } from 'lucide-react';

// const Navbar = () => {
//     return (
//         <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
//             <div className="max-w-7xl mx-auto px-4">
//                 <div className="flex justify-between h-16">
//                     <div className="flex items-center">
//                         <Link to="/" className="flex items-center space-x-2">
//                             <Activity className="h-8 w-8" />
//                             <span className="font-bold text-xl">Smart Health Advisor</span>
//                         </Link>
//                     </div>

//                     <div className="flex items-center space-x-4">
//                         <Link
//                             to="/"
//                             className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
//                         >
//                             <Home className="inline-block h-5 w-5 mr-1" />
//                             Home
//                         </Link>
//                         <Link
//                             to="/register"
//                             className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
//                         >
//                             <UserPlus className="inline-block h-5 w-5 mr-1" />
//                             Register
//                         </Link>
//                         <Link
//                             to="/login"
//                             className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
//                         >
//                             <LogIn className="inline-block h-5 w-5 mr-1" />
//                             Login
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Home, UserPlus, LogIn, LogOut } from 'lucide-react';
import axios from 'axios';

const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');

    const handleLogout = () => {
        // Clear authentication token
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Clear axios default headers
        delete axios.defaults.headers.common['Authorization'];

        // Navigate to home page
        navigate('/');
    };

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
                            to="/check-symptoms"
                            className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            <Home className="inline-block h-5 w-5 mr-1" />
                            Home
                        </Link>

                        {!isLoggedIn ? (
                            <>
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
                            </>
                        ) : (
                            <button
                                onClick={handleLogout}
                                className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                            >
                                <LogOut className="inline-block h-5 w-5 mr-1" />
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
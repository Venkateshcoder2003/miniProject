// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { User, Mail, Lock, Calendar, Users } from 'lucide-react';
// import { toast } from 'react-hot-toast';
// import axios from 'axios';

// const Signup = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         age: '',
//         gender: ''
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/auth/signup', formData);
//             toast.success('Signup successful! Please login.');
//             navigate('/login');
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Signup failed');
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//                         Create an Account
//                     </h2>
//                     <p className="mt-2 text-center text-sm text-gray-600">
//                         Join Smart Health Advisor today
//                     </p>
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                     <div className="rounded-md shadow-sm space-y-4">
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label htmlFor="firstName" className="sr-only">
//                                     First Name
//                                 </label>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                         <User className="h-5 w-5 text-gray-400" />
//                                     </div>
//                                     <input
//                                         id="firstName"
//                                         name="firstName"
//                                         type="text"
//                                         required
//                                         className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                         placeholder="First Name"
//                                         value={formData.firstName}
//                                         onChange={(e) =>
//                                             setFormData({ ...formData, firstName: e.target.value })
//                                         }
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <label htmlFor="lastName" className="sr-only">
//                                     Last Name
//                                 </label>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                         <User className="h-5 w-5 text-gray-400" />
//                                     </div>
//                                     <input
//                                         id="lastName"
//                                         name="lastName"
//                                         type="text"
//                                         required
//                                         className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                         placeholder="Last Name"
//                                         value={formData.lastName}
//                                         onChange={(e) =>
//                                             setFormData({ ...formData, lastName: e.target.value })
//                                         }
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="email" className="sr-only">
//                                 Email address
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <Mail className="h-5 w-5 text-gray-400" />
//                                 </div>
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     required
//                                     className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                     placeholder="Email address"
//                                     value={formData.email}
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, email: e.target.value })
//                                     }
//                                 />
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label htmlFor="age" className="sr-only">
//                                     Age
//                                 </label>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                         <Calendar className="h-5 w-5 text-gray-400" />
//                                     </div>
//                                     <input
//                                         id="age"
//                                         name="age"
//                                         type="number"
//                                         required
//                                         min="0"
//                                         max="120"
//                                         className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                         placeholder="Age"
//                                         value={formData.age}
//                                         onChange={(e) =>
//                                             setFormData({ ...formData, age: e.target.value })
//                                         }
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label htmlFor="gender" className="sr-only">
//                                     Gender
//                                 </label>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                         <Users className="h-5 w-5 text-gray-400" />
//                                     </div>
//                                     <select
//                                         id="gender"
//                                         name="gender"
//                                         required
//                                         className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                         value={formData.gender}
//                                         onChange={(e) =>
//                                             setFormData({ ...formData, gender: e.target.value })
//                                         }
//                                     >
//                                         <option value="">Select Gender</option>
//                                         <option value="male">Male</option>
//                                         <option value="female">Female</option>
//                                         <option value="other">Other</option>
//                                         <option value="prefer-not-to-say">Prefer not to say</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="password" className="sr-only">
//                                 Password
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <Lock className="h-5 w-5 text-gray-400" />
//                                 </div>
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     required
//                                     className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                                     placeholder="Password"
//                                     value={formData.password}
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, password: e.target.value })
//                                     }
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     <div>
//                         <button
//                             type="submit"
//                             className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
//                         >
//                             Register
//                         </button>
//                     </div>

//                     <div className="mt-6">
//                         <div className="relative">
//                             <div className="absolute inset-0 flex items-center">
//                                 <div className="w-full border-t border-gray-300" />
//                             </div>
//                             <div className="relative flex justify-center text-sm">
//                                 <span className="px-2 bg-white text-gray-500">
//                                     Already have an account?
//                                 </span>
//                             </div>
//                         </div>

//                         <div className="mt-6">
//                             <Link
//                                 to="/login"
//                                 className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
//                             >
//                                 Login
//                             </Link>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Signup;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, Calendar, Users } from 'lucide-react';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        age: '',
        gender: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/signup', formData);
            toast.success('Signup successful! Please login.');
            navigate('/login');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Signup failed');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create an Account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Join Smart Health Advisor today
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="sr-only">
                                    First Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastName" className="sr-only">
                                    Last Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="age" className="sr-only">
                                    Age
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="age"
                                        name="age"
                                        type="number"
                                        required
                                        min="0"
                                        max="120"
                                        className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                        placeholder="Age"
                                        value={formData.age}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="gender" className="sr-only">
                                    Gender
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Users className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <select
                                        id="gender"
                                        name="gender"
                                        required
                                        className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                        <option value="prefer-not-to-say">Prefer not to say</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
                        >
                            Register
                        </button>
                    </div>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Already have an account?
                                </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link
                                to="/login"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;

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
//             await axios.post('http://localhost:5000/api/signup', formData);
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
//         <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg flex overflow-hidden">
//                 {/* Image Section */}
//                 <div className="hidden md:block w-1/2 relative">
//                     <img
//                         src="https://healthadvisor.co.uk/wp-content/uploads/2021/02/cropped-HA-Banner-1-scaled-1.jpg"
//                         alt="Health and Wellness"
//                         className="absolute inset-0 w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-purple-600 opacity-50"></div>
//                     <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
//                         <h3 className="text-3xl font-bold mb-4">Welcome to Smart Health Advisor</h3>
//                         <p className="text-xl">Your personalized health journey starts here</p>
//                     </div>
//                 </div>

//                 {/* Form Section */}
//                 <div className="w-full md:w-1/2 p-10 space-y-8">
//                     <div>
//                         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//                             Create an Account
//                         </h2>
//                         <p className="mt-2 text-center text-sm text-gray-600">
//                             Join Smart Health Advisor today
//                         </p>
//                     </div>
//                     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                         <div className="rounded-md shadow-sm space-y-4">
//                             <div className="grid grid-cols-2 gap-4">
//                                 <div>
//                                     <label htmlFor="firstName" className="sr-only">
//                                         First Name
//                                     </label>
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                             <User className="h-5 w-5 text-gray-400" />
//                                         </div>
//                                         <input
//                                             id="firstName"
//                                             name="firstName"
//                                             type="text"
//                                             required
//                                             className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
//                                             placeholder="First Name"
//                                             value={formData.firstName}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label htmlFor="lastName" className="sr-only">
//                                         Last Name
//                                     </label>
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                             <User className="h-5 w-5 text-gray-400" />
//                                         </div>
//                                         <input
//                                             id="lastName"
//                                             name="lastName"
//                                             type="text"
//                                             required
//                                             className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
//                                             placeholder="Last Name"
//                                             value={formData.lastName}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <label htmlFor="email" className="sr-only">
//                                     Email address
//                                 </label>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                         <Mail className="h-5 w-5 text-gray-400" />
//                                     </div>
//                                     <input
//                                         id="email"
//                                         name="email"
//                                         type="email"
//                                         required
//                                         className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
//                                         placeholder="Email address"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-2 gap-4">
//                                 <div>
//                                     <label htmlFor="age" className="sr-only">
//                                         Age
//                                     </label>
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                             <Calendar className="h-5 w-5 text-gray-400" />
//                                         </div>
//                                         <input
//                                             id="age"
//                                             name="age"
//                                             type="number"
//                                             required
//                                             min="0"
//                                             max="120"
//                                             className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
//                                             placeholder="Age"
//                                             value={formData.age}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label htmlFor="gender" className="sr-only">
//                                         Gender
//                                     </label>
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                             <Users className="h-5 w-5 text-gray-400" />
//                                         </div>
//                                         <select
//                                             id="gender"
//                                             name="gender"
//                                             required
//                                             className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
//                                             value={formData.gender}
//                                             onChange={handleChange}
//                                         >
//                                             <option value="">Select Gender</option>
//                                             <option value="male">Male</option>
//                                             <option value="female">Female</option>
//                                             <option value="other">Other</option>
//                                             <option value="prefer-not-to-say">Prefer not to say</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <label htmlFor="password" className="sr-only">
//                                     Password
//                                 </label>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                         <Lock className="h-5 w-5 text-gray-400" />
//                                     </div>
//                                     <input
//                                         id="password"
//                                         name="password"
//                                         type="password"
//                                         required
//                                         className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
//                                         placeholder="Password"
//                                         value={formData.password}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <button
//                                 type="submit"
//                                 className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
//                             >
//                                 Register
//                             </button>
//                         </div>

//                         <div className="mt-6">
//                             <div className="relative">
//                                 <div className="absolute inset-0 flex items-center">
//                                     <div className="w-full border-t border-gray-300" />
//                                 </div>
//                                 <div className="relative flex justify-center text-sm">
//                                     <span className="px-2 bg-white text-gray-500">
//                                         Already have an account?
//                                     </span>
//                                 </div>
//                             </div>

//                             <div className="mt-6">
//                                 <Link
//                                     to="/login"
//                                     className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
//                                 >
//                                     Login
//                                 </Link>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;




// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { User, Mail, Lock, Calendar, Users, Check, X } from 'lucide-react';
// import { toast } from 'react-hot-toast';
// import axios from 'axios';

// // Password requirement component
// const PasswordRequirement = ({ met, text }) => (
//     <div className="flex items-center gap-2 text-sm">
//         {met ? (
//             <Check className="h-4 w-4 text-green-500" />
//         ) : (
//             <X className="h-4 w-4 text-red-500" />
//         )}
//         <span className={met ? 'text-green-500' : 'text-red-500'}>{text}</span>
//     </div>
// );

// const Signup = () => {
//     const navigate = useNavigate();

//     // Form state
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         age: '',
//         gender: ''
//     });

//     // Password strength state
//     const [passwordStrength, setPasswordStrength] = useState({
//         hasLength: false,
//         hasUpperCase: false,
//         hasLowerCase: false,
//         hasNumber: false,
//         hasSpecialChar: false
//     });

//     // Error message state
//     const [passwordError, setPasswordError] = useState('');

//     // Function to check if password contains repeated characters
//     const hasRepeatedChars = (password) => {
//         return /(.)(\1{2,})/.test(password);
//     };

//     // Function to check if password contains sequential numbers
//     const hasSequentialNumbers = (password) => {
//         return /(?:012|123|234|345|456|567|678|789)/.test(password);
//     };

//     // Enhanced password validation function
//     const validatePassword = (password) => {
//         const strength = {
//             hasLength: password.length >= 8,
//             hasUpperCase: /[A-Z]/.test(password),
//             hasLowerCase: /[a-z]/.test(password),
//             hasNumber: /[0-9]/.test(password),
//             hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
//         };

//         setPasswordStrength(strength);

//         if (password.length > 0) {
//             if (hasRepeatedChars(password)) {
//                 setPasswordError('Password cannot contain repeated characters (e.g., 111)');
//                 return false;
//             }

//             if (hasSequentialNumbers(password)) {
//                 setPasswordError('Password cannot contain sequential numbers (e.g., 123)');
//                 return false;
//             }

//             if (!Object.values(strength).every(Boolean)) {
//                 setPasswordError('Password must meet all requirements');
//                 return false;
//             }
//         }

//         setPasswordError('');
//         return true;
//     };

//     // Check if password meets all requirements
//     const isPasswordStrong = () => {
//         const password = formData.password;
//         return password.length >= 8 &&
//             /[A-Z]/.test(password) &&
//             /[a-z]/.test(password) &&
//             /[0-9]/.test(password) &&
//             /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
//             !hasRepeatedChars(password) &&
//             !hasSequentialNumbers(password);
//     };

//     // Form submission handler
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Validate password before submission
//         if (!isPasswordStrong()) {
//             toast.error('Please provide a strong password that meets all requirements');
//             return;
//         }

//         try {
//             // Make API call to register user
//             await axios.post('http://localhost:5000/api/signup', formData);
//             toast.success('Signup successful! Please login.');
//             navigate('/login');
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Signup failed');
//         }
//     };

//     // Input change handler with enhanced password validation
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));

//         // Validate password on change
//         if (name === 'password') {
//             validatePassword(value);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg flex overflow-hidden">
//                 {/* Image Section */}
//                 <div className="hidden md:block w-1/2 relative">
//                     <img
//                         src="https://healthadvisor.co.uk/wp-content/uploads/2021/02/cropped-HA-Banner-1-scaled-1.jpg"
//                         alt="Health and Wellness"
//                         className="absolute inset-0 w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-purple-600 opacity-50"></div>
//                     <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
//                         <h3 className="text-3xl font-bold mb-4">Welcome to Smart Health Advisor</h3>
//                         <p className="text-xl">Your personalized health journey starts here</p>
//                     </div>
//                 </div>

//                 {/* Form Section */}
//                 <div className="w-full md:w-1/2 p-10 space-y-8">
//                     <div>
//                         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//                             Create an Account
//                         </h2>
//                         <p className="mt-2 text-center text-sm text-gray-600">
//                             Join Smart Health Advisor today
//                         </p>
//                     </div>

//                     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                         <div className="rounded-md shadow-sm space-y-4">
//                             {/* Name Fields */}
//                             <div className="grid grid-cols-2 gap-4">
//                                 {/* First Name */}
//                                 <div>
//                                     <label htmlFor="firstName" className="sr-only">First Name</label>
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                             <User className="h-5 w-5 text-gray-400" />
//                                         </div>
//                                         <input
//                                             id="firstName"
//                                             name="firstName"
//                                             type="text"
//                                             required
//                                             className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
//                                             placeholder="First Name"
//                                             value={formData.firstName}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Last Name */}
//                                 <div>
//                                     <label htmlFor="lastName" className="sr-only">Last Name</label>
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                             <User className="h-5 w-5 text-gray-400" />
//                                         </div>
//                                         <input
//                                             id="lastName"
//                                             name="lastName"
//                                             type="text"
//                                             required
//                                             className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
//                                             placeholder="Last Name"
//                                             value={formData.lastName}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Email Field */}
//                             <div>
//                                 <label htmlFor="email" className="sr-only">Email address</label>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                         <Mail className="h-5 w-5 text-gray-400" />
//                                     </div>
//                                     <input
//                                         id="email"
//                                         name="email"
//                                         type="email"
//                                         required
//                                         className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
//                                         placeholder="Email address"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                             </div>

//                             {/* Age and Gender Fields */}
//                             <div className="grid grid-cols-2 gap-4">
//                                 {/* Age Field */}
//                                 <div>
//                                     <label htmlFor="age" className="sr-only">Age</label>
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                             <Calendar className="h-5 w-5 text-gray-400" />
//                                         </div>
//                                         <input
//                                             id="age"
//                                             name="age"
//                                             type="number"
//                                             required
//                                             min="0"
//                                             max="120"
//                                             className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
//                                             placeholder="Age"
//                                             value={formData.age}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Gender Field */}
//                                 <div>
//                                     <label htmlFor="gender" className="sr-only">Gender</label>
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                             <Users className="h-5 w-5 text-gray-400" />
//                                         </div>
//                                         <select
//                                             id="gender"
//                                             name="gender"
//                                             required
//                                             className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
//                                             value={formData.gender}
//                                             onChange={handleChange}
//                                         >
//                                             <option value="">Select Gender</option>
//                                             <option value="male">Male</option>
//                                             <option value="female">Female</option>
//                                             <option value="other">Other</option>
//                                             <option value="prefer-not-to-say">Prefer not to say</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Password Field with Requirements */}
//                             <div className="space-y-2">
//                                 <label htmlFor="password" className="sr-only">Password</label>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                         <Lock className="h-5 w-5 text-gray-400" />
//                                     </div>
//                                     <input
//                                         id="password"
//                                         name="password"
//                                         type="password"
//                                         required
//                                         className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
//                                         placeholder="Password"
//                                         value={formData.password}
//                                         onChange={handleChange}
//                                     />
//                                 </div>

//                                 {/* Password Requirements Display */}
//                                 <div className="mt-2 p-3 bg-gray-50 rounded-lg space-y-2">
//                                     <h4 className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</h4>
//                                     <PasswordRequirement
//                                         met={passwordStrength.hasLength}
//                                         text="At least 8 characters long"
//                                     />
//                                     <PasswordRequirement
//                                         met={passwordStrength.hasUpperCase}
//                                         text="Contains uppercase letter"
//                                     />
//                                     <PasswordRequirement
//                                         met={passwordStrength.hasLowerCase}
//                                         text="Contains lowercase letter"
//                                     />
//                                     <PasswordRequirement
//                                         met={passwordStrength.hasNumber}
//                                         text="Contains number"
//                                     />
//                                     <PasswordRequirement
//                                         met={passwordStrength.hasSpecialChar}
//                                         text="Contains special character"
//                                     />
//                                 </div>

//                                 {/* Password Error Message */}
//                                 {passwordError && (
//                                     <div className="mt-2 text-sm text-red-600">
//                                         {passwordError}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Submit Button */}
//                         <div>
//                             <button
//                                 type="submit"
//                                 className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white transition-colors duration-200 ${isPasswordStrong()
//                                     ? 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'
//                                     : 'bg-gray-400 cursor-not-allowed'
//                                     }`}
//                                 disabled={!isPasswordStrong()}
//                             >
//                                 Register
//                             </button>
//                         </div>

//                         {/* Login Link Section */}
//                         <div className="mt-6">
//                             <div className="relative">
//                                 <div className="absolute inset-0 flex items-center">
//                                     <div className="w-full border-t border-gray-300" />
//                                 </div>
//                                 <div className="relative flex justify-center text-sm">
//                                     <span className="px-2 bg-white text-gray-500">
//                                         Already have an account?
//                                     </span>
//                                 </div>
//                             </div>

//                             <div className="mt-6">
//                                 <Link
//                                     to="/login"
//                                     className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
//                                 >
//                                     Login
//                                 </Link>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;



import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, Calendar, Users, Check, X } from 'lucide-react';
import { toast } from 'react-hot-toast';
import axios from 'axios';

// Password requirement component
const PasswordRequirement = ({ met, text }) => (
    <div className="flex items-center gap-2 text-sm">
        {met ? (
            <Check className="h-4 w-4 text-green-500" />
        ) : (
            <X className="h-4 w-4 text-red-500" />
        )}
        <span className={met ? 'text-green-500' : 'text-red-500'}>{text}</span>
    </div>
);

const Signup = () => {
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        age: '',
        gender: ''
    });

    // Password strength state
    const [passwordStrength, setPasswordStrength] = useState({
        hasLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false
    });

    // Error message state
    const [passwordError, setPasswordError] = useState('');

    // Function to check if password contains repeated characters
    const hasRepeatedChars = (password) => {
        return /(.)(\1{2,})/.test(password);
    };

    // Function to check if password contains sequential numbers
    const hasSequentialNumbers = (password) => {
        return /(?:012|123|234|345|456|567|678|789)/.test(password);
    };

    // Enhanced password validation function
    const validatePassword = (password) => {
        const strength = {
            hasLength: password.length >= 8,
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumber: /[0-9]/.test(password),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };

        setPasswordStrength(strength);

        if (password.length > 0) {
            if (hasRepeatedChars(password)) {
                setPasswordError('Password cannot contain repeated characters (e.g., 111)');
                return false;
            }

            if (hasSequentialNumbers(password)) {
                setPasswordError('Password cannot contain sequential numbers (e.g., 123)');
                return false;
            }

            if (!Object.values(strength).every(Boolean)) {
                setPasswordError('Password must meet all requirements');
                return false;
            }
        }

        setPasswordError('');
        return true;
    };

    // Check if password meets all requirements
    const isPasswordStrong = () => {
        const password = formData.password;
        return password.length >= 8 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
            !hasRepeatedChars(password) &&
            !hasSequentialNumbers(password);
    };

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate password before submission
        if (!isPasswordStrong()) {
            toast.error('Please provide a strong password that meets all requirements');
            return;
        }

        try {
            // Make API call to register user
            await axios.post('http://localhost:5000/api/signup', formData);
            toast.success('Signup successful! Please login.');
            navigate('/login');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Signup failed');
        }
    };

    // Input change handler with enhanced password validation
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Validate password on change
        if (name === 'password') {
            validatePassword(value);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg flex overflow-hidden">
                {/* Image Section */}
                <div className="hidden md:block w-1/2 relative">
                    <img
                        src="https://healthadvisor.co.uk/wp-content/uploads/2021/02/cropped-HA-Banner-1-scaled-1.jpg"
                        alt="Health and Wellness"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-purple-600 opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
                        <h3 className="text-3xl font-bold mb-4">Welcome to Smart Health Advisor</h3>
                        <p className="text-xl">Your personalized health journey starts here</p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 p-6 space-y-6">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Create an Account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Join Smart Health Advisor today
                        </p>
                    </div>

                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm space-y-4">
                            {/* Name Fields */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* First Name */}
                                <div>
                                    <label htmlFor="firstName" className="sr-only">First Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            required
                                            className="appearance-none rounded-lg relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 text-sm"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            required
                                            className="appearance-none rounded-lg relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 text-sm"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="sr-only">Email address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="appearance-none rounded-lg relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 text-sm"
                                        placeholder="Email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Age and Gender Fields */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Age Field */}
                                <div>
                                    <label htmlFor="age" className="sr-only">Age</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Calendar className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <input
                                            id="age"
                                            name="age"
                                            type="number"
                                            required
                                            min="0"
                                            max="120"
                                            className="appearance-none rounded-lg relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 text-sm"
                                            placeholder="Age"
                                            value={formData.age}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Gender Field */}
                                <div>
                                    <label htmlFor="gender" className="sr-only">Gender</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Users className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <select
                                            id="gender"
                                            name="gender"
                                            required
                                            className="appearance-none rounded-lg relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 text-sm"
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

                            {/* Password Field with Requirements */}
                            <div className="space-y-2">
                                <label htmlFor="password" className="sr-only">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="appearance-none rounded-lg relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 text-sm"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Password Requirements Display */}
                                <div className="mt-2 p-2 bg-gray-50 rounded-lg space-y-1 text-xs">
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</h4>
                                    <PasswordRequirement
                                        met={passwordStrength.hasLength}
                                        text="At least 8 characters long"
                                    />
                                    <PasswordRequirement
                                        met={passwordStrength.hasUpperCase}
                                        text="Contains uppercase letter"
                                    />
                                    <PasswordRequirement
                                        met={passwordStrength.hasLowerCase}
                                        text="Contains lowercase letter"
                                    />
                                    <PasswordRequirement
                                        met={passwordStrength.hasNumber}
                                        text="Contains number"
                                    />
                                    <PasswordRequirement
                                        met={passwordStrength.hasSpecialChar}
                                        text="Contains special character"
                                    />
                                </div>

                                {/* Password Error Message */}
                                {passwordError && (
                                    <div className="mt-2 text-sm text-red-600">
                                        {passwordError}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white transition-colors duration-200 ${isPasswordStrong()
                                    ? 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'
                                    : 'bg-gray-400 cursor-not-allowed'
                                    }`}
                                disabled={!isPasswordStrong()}
                            >
                                Register
                            </button>
                        </div>

                        {/* Login Link Section */}
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
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;


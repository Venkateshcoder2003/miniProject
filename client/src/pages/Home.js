// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Activity, Heart, Brain, Stethoscope } from 'lucide-react';


// function FeatureCard({ icon, title, description }) {
//     return (
//         <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
//             <div className="text-blue-600 mb-4">{icon}</div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//             <p className="text-gray-600">{description}</p>
//         </div>
//     );
// }

// function Home() {
//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center">
//                         <h1 className="text-4xl md:text-6xl font-bold mb-6">
//                             Your Personal Health Assistant
//                         </h1>
//                         <p className="text-xl md:text-2xl mb-8">
//                             Get instant health insights powered by AI
//                         </p>
//                         <Link
//                             to="/signup"
//                             className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
//                         >
//                             Check Your Symptoms
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             <div className="py-16 px-4 sm:px-6 lg:px-8">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         <FeatureCard
//                             icon={<Activity className="h-8 w-8" />}
//                             title="Symptom Analysis"
//                             description="Advanced AI-powered symptom analysis for accurate health insights"
//                         />
//                         <FeatureCard
//                             icon={<Heart className="h-8 w-8" />}
//                             title="Health Recommendations"
//                             description="Personalized health recommendations and precautions"
//                         />
//                         <FeatureCard
//                             icon={<Brain className="h-8 w-8" />}
//                             title="Smart Predictions"
//                             description="Machine learning algorithms for disease prediction"
//                         />
//                         <FeatureCard
//                             icon={<Stethoscope className="h-8 w-8" />}
//                             title="Medical Guidance"
//                             description="Expert medical information and dietary advice"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Brain, Stethoscope } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="text-purple-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Your Personal Health Assistant
                        </h1>
                        <p className="text-xl md:text-2xl mb-8">
                            Get instant health insights powered by AI
                        </p>
                        <Link
                            to="/register"
                            className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<Activity className="h-8 w-8" />}
                            title="Symptom Analysis"
                            description="Advanced AI-powered symptom analysis for accurate health insights"
                        />
                        <FeatureCard
                            icon={<Heart className="h-8 w-8" />}
                            title="Health Recommendations"
                            description="Personalized health recommendations and precautions"
                        />
                        <FeatureCard
                            icon={<Brain className="h-8 w-8" />}
                            title="Smart Predictions"
                            description="Machine learning algorithms for disease prediction"
                        />
                        <FeatureCard
                            icon={<Stethoscope className="h-8 w-8" />}
                            title="Medical Guidance"
                            description="Expert medical information and dietary advice"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
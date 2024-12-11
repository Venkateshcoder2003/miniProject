// import React, { useState } from 'react';
// import { Activity, AlertCircle } from 'lucide-react';

// const symptoms = [
//     'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing',
//     'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity',
//     'vomiting', 'fatigue', 'anxiety', 'cold_hands_and_feets', 'mood_swings',
//     'weight_loss', 'restlessness', 'lethargy', 'cough', 'high_fever',
//     'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache',
//     'nausea', 'loss_of_appetite', 'back_pain', 'constipation', 'abdominal_pain',
//     'diarrhoea', 'mild_fever'
// ];

// const SymptomChecker = () => {
//     const [selectedSymptoms, setSelectedSymptoms] = useState([]);
//     const [prediction, setPrediction] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleSymptomChange = (symptom) => {
//         setSelectedSymptoms(prev =>
//             prev.includes(symptom)
//                 ? prev.filter(s => s !== symptom)
//                 : [...prev, symptom]
//         );
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (selectedSymptoms.length === 0) {
//             setError('Please select at least one symptom');
//             return;
//         }

//         setLoading(true);
//         setError('');

//         // Simulated API call with mock data
//         setTimeout(() => {
//             setPrediction({
//                 disease: 'Common Cold',
//                 description: 'A viral infection of the upper respiratory tract.',
//                 precautions: [
//                     'Rest adequately',
//                     'Stay hydrated',
//                     'Maintain good hygiene',
//                     'Avoid cold exposure'
//                 ],
//                 medications: [
//                     'Antihistamines',
//                     'Decongestants',
//                     'Pain relievers'
//                 ],
//                 diets: [
//                     'Warm soups',
//                     'Hot teas',
//                     'Citrus fruits',
//                     'Garlic and ginger'
//                 ]
//             });
//             setLoading(false);
//         }, 1500);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 py-12">
//             <div className="max-w-7xl mx-auto px-4">
//                 <div className="text-center mb-12">
//                     <h1 className="text-3xl font-bold text-gray-900">Symptom Checker</h1>
//                     <p className="mt-2 text-lg text-gray-600">
//                         Select your symptoms for an AI-powered health analysis
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Select Your Symptoms</h2>
//                         <div className="grid grid-cols-2 gap-2">
//                             {symptoms.map((symptom) => (
//                                 <label
//                                     key={symptom}
//                                     className="flex items-center space-x-2 cursor-pointer"
//                                 >
//                                     <input
//                                         type="checkbox"
//                                         checked={selectedSymptoms.includes(symptom)}
//                                         onChange={() => handleSymptomChange(symptom)}
//                                         className="rounded border-gray-300"
//                                     />
//                                     <span className="text-sm text-gray-700">
//                                         {symptom.replace(/_/g, ' ')}
//                                     </span>
//                                 </label>
//                             ))}
//                         </div>
//                         {error && (
//                             <p className="text-red-500 text-sm mt-2">{error}</p>
//                         )}
//                         <button
//                             onClick={handleSubmit}
//                             disabled={loading}
//                             className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
//                         >
//                             {loading ? (
//                                 <Activity className="animate-spin h-5 w-5" />
//                             ) : (
//                                 'Analyze Symptoms'
//                             )}
//                         </button>
//                     </div>

//                     {prediction && (
//                         <div className="bg-white p-6 rounded-lg shadow-md">
//                             <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
//                             <div className="space-y-4">
//                                 <div>
//                                     <h3 className="font-medium text-gray-900">Possible Condition:</h3>
//                                     <p className="text-lg text-blue-600 font-semibold">
//                                         {prediction.disease}
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-medium text-gray-900">Description:</h3>
//                                     <p className="text-gray-600">{prediction.description}</p>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-medium text-gray-900">Precautions:</h3>
//                                     <ul className="list-disc pl-5 text-gray-600">
//                                         {prediction.precautions.map((precaution, index) => (
//                                             <li key={index}>{precaution}</li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-medium text-gray-900">Recommended Medications:</h3>
//                                     <ul className="list-disc pl-5 text-gray-600">
//                                         {prediction.medications.map((medication, index) => (
//                                             <li key={index}>{medication}</li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-medium text-gray-900">Dietary Recommendations:</h3>
//                                     <ul className="list-disc pl-5 text-gray-600">
//                                         {prediction.diets.map((diet, index) => (
//                                             <li key={index}>{diet}</li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 <div className="bg-yellow-50 p-4 rounded-lg">
//                                     <div className="flex items-center">
//                                         <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
//                                         <p className="text-sm text-yellow-700">
//                                             This is an AI-powered analysis and should not replace professional medical advice. Please consult a healthcare provider for proper diagnosis and treatment.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SymptomChecker;



import React, { useState } from 'react';
import { Activity, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const symptoms = [
    "itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing", "shivering", "chills",
    "joint_pain", "stomach_pain", "acidity", "ulcers_on_tongue", "muscle_wasting", "vomiting",
    "burning_micturition", "spotting_urination", "fatigue", "weight_gain", "anxiety",
    "cold_hands_and_feets", "mood_swings", "weight_loss", "restlessness", "lethargy",
    "patches_in_throat", "irregular_sugar_level", "cough", "high_fever", "sunken_eyes",
    "breathlessness", "sweating", "dehydration", "indigestion", "headache", "yellowish_skin",
    "dark_urine", "nausea", "loss_of_appetite", "pain_behind_the_eyes", "back_pain",
    "constipation", "abdominal_pain", "diarrhoea", "mild_fever", "yellow_urine",
    "yellowing_of_eyes", "acute_liver_failure", "fluid_overload", "swelling_of_stomach",
    "swelled_lymph_nodes", "malaise", "blurred_and_distorted_vision", "phlegm",
    "throat_irritation", "redness_of_eyes", "sinus_pressure", "runny_nose", "congestion",
    "chest_pain", "weakness_in_limbs", "fast_heart_rate", "pain_during_bowel_movements",
    "pain_in_anal_region", "bloody_stool", "irritation_in_anus", "neck_pain", "dizziness",
    "cramps", "bruising", "obesity", "swollen_legs", "swollen_blood_vessels",
    "puffy_face_and_eyes", "enlarged_thyroid", "brittle_nails", "swollen_extremities",
    "excessive_hunger", "extra_marital_contacts", "drying_and_tingling_lips",
    "slurred_speech", "knee_pain", "hip_joint_pain", "muscle_weakness", "stiff_neck",
    "swelling_joints", "movement_stiffness", "spinning_movements", "loss_of_balance",
    "unsteadiness", "weakness_of_one_body_side", "loss_of_smell", "bladder_discomfort",
    "foul_smell_of_urine", "continuous_feel_of_urine", "passage_of_gases", "internal_itching",
    "toxic_look_(typhos)", "depression", "irritability", "muscle_pain", "altered_sensorium",
    "red_spots_over_body", "belly_pain", "abnormal_menstruation", "dischromic_patches",
    "watering_from_eyes", "increased_appetite", "polyuria", "family_history",
    "mucoid_sputum", "rusty_sputum", "lack_of_concentration", "visual_disturbances",
    "receiving_blood_transfusion", "receiving_unsterile_injections", "coma",
    "stomach_bleeding", "distention_of_abdomen", "history_of_alcohol_consumption",
    "blood_in_sputum", "prominent_veins_on_calf", "palpitations", "painful_walking",
    "pus_filled_pimples", "blackheads", "scurring", "skin_peeling", "silver_like_dusting",
    "small_dents_in_nails", "inflammatory_nails", "blister", "red_sore_around_nose",
    "yellow_crust_ooze", "prognosis"
];


const SymptomChecker = () => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSymptomChange = (symptom) => {
        setSelectedSymptoms(prev =>
            prev.includes(symptom)
                ? prev.filter(s => s !== symptom)
                : [...prev, symptom]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedSymptoms.length === 0) {
            setError('Please select at least one symptom');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:5000/api/predict',
                { symptoms: selectedSymptoms },
                // { headers: { Authorization: `Bearer ${token}` } }
            );
            setPrediction(response.data);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Prediction failed');
            setError('Failed to analyze symptoms. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900">Symptom Checker</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Select your symptoms for an AI-powered health analysis
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Select Your Symptoms</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {symptoms.map((symptom) => (
                                <label
                                    key={symptom}
                                    className="flex items-center space-x-2 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedSymptoms.includes(symptom)}
                                        onChange={() => handleSymptomChange(symptom)}
                                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                    />
                                    <span className="text-sm text-gray-700">
                                        {symptom.replace(/_/g, ' ')}
                                    </span>
                                </label>
                            ))}
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm mt-2">{error}</p>
                        )}
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="mt-6 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <Activity className="animate-spin h-5 w-5" />
                            ) : (
                                'Analyze Symptoms'
                            )}
                        </button>
                    </div>

                    {prediction && (
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium text-gray-900">Possible Condition:</h3>
                                    <p className="text-lg text-purple-600 font-semibold">
                                        {prediction.disease}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Description:</h3>
                                    <p className="text-gray-600">{prediction.description}</p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Precautions:</h3>
                                    <ul className="list-disc pl-5 text-gray-600">
                                        {prediction.precautions.map((precaution, index) => (
                                            <li key={index}>{precaution}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Recommended Medications:</h3>
                                    <ul className="list-disc pl-5 text-gray-600">
                                        {prediction.medications.map((medication, index) => (
                                            <li key={index}>{medication}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Dietary Recommendations:</h3>
                                    <ul className="list-disc pl-5 text-gray-600">
                                        {prediction.diets.map((diet, index) => (
                                            <li key={index}>{diet}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <div className="flex items-center">
                                        <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
                                        <p className="text-sm text-yellow-700">
                                            This is an AI-powered analysis and should not replace professional medical advice. Please consult a healthcare provider for proper diagnosis and treatment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SymptomChecker;
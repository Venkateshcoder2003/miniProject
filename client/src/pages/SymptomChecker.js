// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Activity, AlertCircle } from 'lucide-react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';

// const symptoms = [
//     "itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing", "shivering", "chills",
//     "joint_pain", "stomach_pain", "acidity", "ulcers_on_tongue", "muscle_wasting", "vomiting",
//     "burning_micturition", "spotting_urination", "fatigue", "weight_gain", "anxiety",
//     "cold_hands_and_feets", "mood_swings", "weight_loss", "restlessness", "lethargy",
//     "patches_in_throat", "irregular_sugar_level", "cough", "high_fever", "sunken_eyes",
//     "breathlessness", "sweating", "dehydration", "indigestion", "headache", "yellowish_skin",
//     "dark_urine", "nausea", "loss_of_appetite", "pain_behind_the_eyes", "back_pain",
//     "constipation", "abdominal_pain", "diarrhoea", "mild_fever", "yellow_urine",
//     "yellowing_of_eyes", "acute_liver_failure", "fluid_overload", "swelling_of_stomach",
//     "swelled_lymph_nodes", "malaise", "blurred_and_distorted_vision", "phlegm",
//     "throat_irritation", "redness_of_eyes", "sinus_pressure", "runny_nose", "congestion",
//     "chest_pain", "weakness_in_limbs", "fast_heart_rate", "pain_during_bowel_movements",
//     "pain_in_anal_region", "bloody_stool", "irritation_in_anus", "neck_pain", "dizziness",
//     "cramps", "bruising", "obesity", "swollen_legs", "swollen_blood_vessels",
//     "puffy_face_and_eyes", "enlarged_thyroid", "brittle_nails", "swollen_extremities",
//     "excessive_hunger", "extra_marital_contacts", "drying_and_tingling_lips",
//     "slurred_speech", "knee_pain", "hip_joint_pain", "muscle_weakness", "stiff_neck",
//     "swelling_joints", "movement_stiffness", "spinning_movements", "loss_of_balance",
//     "unsteadiness", "weakness_of_one_body_side", "loss_of_smell", "bladder_discomfort",
//     "foul_smell_of_urine", "continuous_feel_of_urine", "passage_of_gases", "internal_itching",
//     "toxic_look_(typhos)", "depression", "irritability", "muscle_pain", "altered_sensorium",
//     "red_spots_over_body", "belly_pain", "abnormal_menstruation", "dischromic_patches",
//     "watering_from_eyes", "increased_appetite", "polyuria", "family_history",
//     "mucoid_sputum", "rusty_sputum", "lack_of_concentration", "visual_disturbances",
//     "receiving_blood_transfusion", "receiving_unsterile_injections", "coma",
//     "stomach_bleeding", "distention_of_abdomen", "history_of_alcohol_consumption",
//     "blood_in_sputum", "prominent_veins_on_calf", "palpitations", "painful_walking",
//     "pus_filled_pimples", "blackheads", "scurring", "skin_peeling", "silver_like_dusting",
//     "small_dents_in_nails", "inflammatory_nails", "blister", "red_sore_around_nose",
//     "yellow_crust_ooze", "prognosis"
// ];

// const SymptomChecker = () => {
//     const navigate = useNavigate();
//     const [selectedSymptoms, setSelectedSymptoms] = useState([]);
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

//         try {
//             const response = await axios.post('http://localhost:5000/api/predict',
//                 { symptoms: selectedSymptoms }
//             );

//             // Navigate to results page with prediction data
//             navigate('/symptom-results', {
//                 state: {
//                     prediction: response.data
//                 }
//             });
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Prediction failed');
//             setError('Failed to analyze symptoms. Please try again.');
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 py-12 px-4 w-full">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-12">
//                     <h1 className="text-4xl font-bold text-gray-900">Symptom Checker</h1>
//                     <p className="mt-4 text-xl text-gray-600">
//                         Select your symptoms for an AI-powered health analysis
//                     </p>
//                 </div>

//                 <div className="bg-white p-8 rounded-xl shadow-2xl w-full">
//                     <h2 className="text-2xl font-semibold mb-6">Select Your Symptoms</h2>
//                     <div className="grid grid-cols-5 gap-4 max-h-[600px] overflow-y-auto">
//                         {symptoms.map((symptom) => (
//                             <label
//                                 key={symptom}
//                                 className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors"
//                             >
//                                 <input
//                                     type="checkbox"
//                                     checked={selectedSymptoms.includes(symptom)}
//                                     onChange={() => handleSymptomChange(symptom)}
//                                     className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 h-4 w-4"
//                                 />
//                                 <span className="text-sm text-gray-800">
//                                     {symptom.replace(/_/g, ' ')}
//                                 </span>
//                             </label>
//                         ))}
//                     </div>
//                     {error && (
//                         <div className="mt-4 flex items-center text-red-500 space-x-2">
//                             <AlertCircle className="h-5 w-5" />
//                             <p className="text-sm">{error}</p>
//                         </div>
//                     )}
//                     <button
//                         onClick={handleSubmit}
//                         disabled={loading}
//                         className="mt-8 w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold"
//                     >
//                         {loading ? (
//                             <Activity className="animate-spin h-6 w-6 mr-2" />
//                         ) : (
//                             'Analyze Symptoms'
//                         )}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SymptomChecker;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
]

export default function SymptomChecker() {
    const [selectedSymptoms, setSelectedSymptoms] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const handleSymptomChange = (symptom) => {
        setSelectedSymptoms(prev =>
            prev.includes(symptom)
                ? prev.filter(s => s !== symptom)
                : [...prev, symptom]
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedSymptoms.length === 0) {
            setError('Please select at least one symptom');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/predict',
                { symptoms: selectedSymptoms }
            );

            // Navigate to results page with prediction data
            navigate('/symptom-results', {
                state: {
                    prediction: response.data
                }
            });
        } catch (error) {
            toast.error(error.response?.data?.message || 'Prediction failed');
            setError('Failed to analyze symptoms. Please try again.');
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen bg-gray-50 py-6 sm:py-12 px-4 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
                        Symptom Checker
                    </h1>
                    <p className="mt-2 sm:mt-4 text-base sm:text-xl text-gray-600">
                        Select your symptoms for an AI-powered health analysis
                    </p>
                </div>

                <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg sm:shadow-2xl w-full">
                    <div className="mb-4 sm:mb-6">
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full bg-purple-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg font-semibold"
                        >
                            {loading ? (
                                <Activity className="animate-spin h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                            ) : (
                                'Analyze Symptoms'
                            )}
                        </button>
                        {error && (
                            <div className="mt-3 flex items-center text-red-500 space-x-2">
                                <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                                <p className="text-xs sm:text-sm">{error}</p>
                            </div>
                        )}
                    </div>

                    <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                        Select Your Symptoms
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 max-h-[400px] sm:max-h-[600px] overflow-y-auto">
                        {symptoms.map((symptom) => (
                            <label
                                key={symptom}
                                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors"
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedSymptoms.includes(symptom)}
                                    onChange={() => handleSymptomChange(symptom)}
                                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 h-3 w-3 sm:h-4 sm:w-4"
                                />
                                <span className="text-xs sm:text-sm text-gray-800">
                                    {symptom.replace(/_/g, ' ')}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


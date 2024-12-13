import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const ResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract prediction from location state
    const { prediction } = location.state || {};

    // State to manage which section is currently displayed
    const [activeSection, setActiveSection] = useState(null);

    // If no prediction, redirect back
    if (!prediction) {
        navigate('/check-symptoms');
        return null;
    }

    // Render content based on active section
    const renderContent = () => {
        switch (activeSection) {
            case 'conditions':
                return (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Possible Condition</h2>
                        <p className="text-lg text-purple-600 font-semibold">
                            {prediction.disease}
                        </p>
                    </div>
                );
            case 'description':
                return (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Description</h2>
                        <p className="text-gray-600">{prediction.description}</p>
                    </div>
                );
            case 'precautions':
                return (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Precautions</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            {prediction.precautions.map((precaution, index) => (
                                <li key={index}>{precaution}</li>
                            ))}
                        </ul>
                    </div>
                );
            case 'medications':
                return (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Recommended Medications</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            {prediction.medications.map((medication, index) => (
                                <li key={index}>{medication}</li>
                            ))}
                        </ul>
                    </div>
                );
            case 'diet':
                return (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Dietary Recommendations</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            {prediction.diets.map((diet, index) => (
                                <li key={index}>{diet}</li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900">Symptom Analysis Results</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Detailed Information about Your Potential Condition
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {[
                        { key: 'conditions', label: 'Possible Conditions' },
                        { key: 'description', label: 'Description' },
                        { key: 'precautions', label: 'Precautions' },
                        { key: 'medications', label: 'Medications' },
                        { key: 'diet', label: 'Dietary Recommendations' }
                    ].map(section => (
                        <button
                            key={section.key}
                            onClick={() => setActiveSection(section.key)}
                            className={`py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === section.key
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>

                {activeSection && renderContent()}

                {!activeSection && (
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <p className="text-gray-600">
                            Please select a section to view more details about your symptom analysis.
                        </p>
                    </div>
                )}

                <div className="bg-yellow-50 p-4 rounded-lg mt-8">
                    <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
                        <p className="text-sm text-yellow-700">
                            This is an AI-powered analysis and should not replace professional medical advice. Please consult a healthcare provider for proper diagnosis and treatment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsPage;
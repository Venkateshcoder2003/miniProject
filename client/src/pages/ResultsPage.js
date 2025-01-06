// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { AlertCircle } from 'lucide-react';

// const ResultsPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     // Extract prediction from location state
//     const { prediction } = location.state || {};

//     // State to manage which section is currently displayed
//     const [activeSection, setActiveSection] = useState(null);

//     // If no prediction, redirect back
//     useEffect(() => {
//         if (!prediction) {
//             navigate('/');
//         }
//     }, [prediction, navigate]);

//     // If no prediction, return null to prevent rendering
//     if (!prediction) {
//         return null;
//     }

//     // Render content based on active section
//     const renderContent = () => {
//         switch (activeSection) {
//             case 'conditions':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Possible Condition</h2>
//                         <p className="text-lg text-purple-600 font-semibold">
//                             {prediction.disease}
//                         </p>
//                     </div>
//                 );
//             case 'description':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Description</h2>
//                         <p className="text-gray-600">{prediction.description}</p>
//                     </div>
//                 );
//             case 'precautions':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Precautions</h2>
//                         <ul className="list-disc pl-5 text-gray-600">
//                             {prediction.precautions.map((precaution, index) => (
//                                 <li key={index}>{precaution}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 );
//             case 'medications':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Recommended Medications</h2>
//                         <ul className="list-disc pl-5 text-gray-600">
//                             {prediction.medications.map((medication, index) => (
//                                 <li key={index}>{medication}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 );
//             case 'diet':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Dietary Recommendations</h2>
//                         <ul className="list-disc pl-5 text-gray-600">
//                             {prediction.diets.map((diet, index) => (
//                                 <li key={index}>{diet}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 );
//             case 'workouts':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Workouts</h2>
//                         <ul className="list-disc pl-5 text-gray-600">
//                             {prediction.workouts.map((precaution, index) => (
//                                 <li key={index}>{precaution}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 );
//             default:
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//                         <p className="text-gray-600">
//                             Please select a section to view more details about your symptom analysis.
//                         </p>
//                     </div>
//                 );
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 py-12">
//             <div className="max-w-4xl mx-auto px-4">
//                 <div className="text-center mb-12">
//                     <h1 className="text-3xl font-bold text-gray-900">Symptom Analysis Results</h1>
//                     <p className="mt-2 text-lg text-gray-600">
//                         Detailed Information about Your Potential Condition
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//                     {[
//                         { key: 'conditions', label: 'Possible Conditions' },
//                         { key: 'description', label: 'Description' },
//                         { key: 'precautions', label: 'Precautions' },
//                         { key: 'medications', label: 'Medications' },
//                         { key: 'diet', label: 'Dietary Recommendations' },
//                         { key: 'workouts', label: 'Workouts' }
//                     ].map(section => (
//                         <button
//                             key={section.key}
//                             onClick={() => setActiveSection(section.key)}
//                             className={`py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === section.key
//                                 ? 'bg-purple-600 text-white'
//                                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                                 }`}
//                         >
//                             {section.label}
//                         </button>
//                     ))}
//                 </div>

//                 {renderContent()}

//                 <div className="bg-yellow-50 p-4 rounded-lg mt-8">
//                     <div className="flex items-center">
//                         <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
//                         <p className="text-sm text-yellow-700">
//                             This is an AI-powered analysis and should not replace professional medical advice. Please consult a healthcare provider for proper diagnosis and treatment.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ResultsPage;





// import React, { useState, useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { AlertCircle, Download, Loader2 } from 'lucide-react'
// import jsPDF from 'jspdf'

// const generatePDF = async (prediction) => {
//     const doc = new jsPDF()

//     // Set initial position and styling
//     let yPos = 20
//     const margin = 20
//     const pageWidth = doc.internal.pageSize.width

//     // Helper function to add text
//     const addText = (text, x, y, options = {}) => {
//         const { fontSize = 10, isBold = false, align = 'left', color = '#000000' } = options
//         doc.setFontSize(fontSize)
//         doc.setTextColor(color)
//         if (isBold) doc.setFont('helvetica', 'bold')
//         else doc.setFont('helvetica', 'normal')

//         if (align === 'center') {
//             x = (pageWidth - doc.getTextWidth(text)) / 2
//         } else if (align === 'right') {
//             x = pageWidth - margin - doc.getTextWidth(text)
//         }

//         doc.text(text, x, y)
//     }

//     // Add clinic logo (green heart icon as text representation)
//     doc.setTextColor('#4CAF50') // Green color
//     addText('♥', pageWidth - 40, yPos, { fontSize: 20, align: 'right', color: '#4CAF50' })

//     // Header
//     addText('SMART HEALTH ADVISOR', margin, yPos, { fontSize: 18, isBold: true, color: '#4CAF50' })
//     yPos += 8
//     addText('AI-Powered Medical Analysis System', margin, yPos, { fontSize: 10, color: '#666666' })
//     yPos += 5
//     addText('Email: contact@smarthealthadvisor.com', margin, yPos, { fontSize: 8, color: '#666666' })
//     yPos += 4
//     addText('Web: www.smarthealthadvisor.com', margin, yPos, { fontSize: 8, color: '#666666' })

//     // Add horizontal line
//     yPos += 8
//     doc.setDrawColor('#4CAF50')
//     doc.line(margin, yPos, pageWidth - margin, yPos)
//     yPos += 15

//     // Patient Information Section
//     addText('PATIENT INFORMATION', margin, yPos, { fontSize: 12, isBold: true })
//     yPos += 10

//     // Create form-like structure
//     const formFields = [
//         { label: 'Report ID:', value: `SHA-${Math.random().toString(36).substr(2, 9).toUpperCase()}` },
//         { label: 'Date:', value: new Date().toLocaleDateString() },
//         { label: 'Analysis Type:', value: 'AI-Powered Symptom Analysis' }
//     ]

//     formFields.forEach(field => {
//         addText(field.label, margin, yPos, { fontSize: 10, isBold: true })
//         addText(field.value, margin + 60, yPos, { fontSize: 10 })
//         yPos += 8
//     })

//     yPos += 10

//     // Diagnosis Section
//     addText('DIAGNOSIS', margin, yPos, { fontSize: 12, isBold: true })
//     yPos += 8
//     addText('Primary Condition:', margin, yPos, { fontSize: 10, isBold: true })
//     addText(prediction.disease, margin + 80, yPos, { fontSize: 10 })
//     yPos += 15

//     // Description with word wrap
//     addText('Clinical Description:', margin, yPos, { fontSize: 10, isBold: true })
//     yPos += 8
//     const descriptionLines = doc.splitTextToSize(prediction.description, pageWidth - (2 * margin))
//     doc.text(descriptionLines, margin, yPos)
//     yPos += (descriptionLines.length * 5) + 10

//     // Treatment Plan
//     addText('TREATMENT PLAN', margin, yPos, { fontSize: 12, isBold: true })
//     yPos += 8

//     // Medications
//     addText('Recommended Medications:', margin, yPos, { fontSize: 10, isBold: true })
//     yPos += 8
//     prediction.medications.forEach(med => {
//         addText(`• ${med}`, margin + 5, yPos, { fontSize: 9 })
//         yPos += 5
//     })
//     yPos += 5

//     // Precautions
//     addText('Precautionary Measures:', margin, yPos, { fontSize: 10, isBold: true })
//     yPos += 8
//     prediction.precautions.forEach(prec => {
//         addText(`• ${prec}`, margin + 5, yPos, { fontSize: 9 })
//         yPos += 5
//     })
//     yPos += 5

//     //Workouts
//     addText('Workouts:', margin, yPos, { fontSize: 10, isBold: true })
//     yPos += 8
//     prediction.workouts.forEach(prec => {
//         addText(`• ${prec}`, margin + 5, yPos, { fontSize: 9 })
//         yPos += 5
//     })
//     yPos += 5

//     // Footer
//     const footerY = doc.internal.pageSize.height - 30
//     doc.setDrawColor('#4CAF50')
//     doc.line(margin, footerY, pageWidth - margin, footerY)

//     // Disclaimer
//     doc.setFontSize(8)
//     doc.setTextColor('#666666')
//     const disclaimer = 'DISCLAIMER: This is an AI-generated analysis report. This report is for informational purposes only and should not be considered as a substitute for professional medical advice. Please consult a healthcare provider for proper diagnosis and treatment.'
//     const disclaimerLines = doc.splitTextToSize(disclaimer, pageWidth - (2 * margin))
//     doc.text(disclaimerLines, margin, footerY + 10)

//     // Save the PDF
//     doc.save(`SHA-Medical-Report-${new Date().toISOString().split('T')[0]}.pdf`)
// }

// const ResultsPage = () => {
//     const location = useLocation()
//     const navigate = useNavigate()
//     const [activeSection, setActiveSection] = useState(null)
//     const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

//     // Extract prediction from location state
//     const { prediction } = location.state || {}

//     useEffect(() => {
//         if (!prediction) {
//             navigate('/')
//         }
//     }, [prediction, navigate])

//     if (!prediction) {
//         return null
//     }

//     const handleGeneratePDF = async () => {
//         setIsGeneratingPDF(true)
//         try {
//             await generatePDF(prediction)
//         } catch (error) {
//             console.error('Error generating PDF:', error)
//         } finally {
//             setIsGeneratingPDF(false)
//         }
//     }

//     // Render content based on active section
//     const renderContent = () => {
//         switch (activeSection) {
//             case 'conditions':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Possible Condition</h2>
//                         <p className="text-lg text-purple-600 font-semibold">
//                             {prediction.disease}
//                         </p>
//                     </div>
//                 )
//             case 'description':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Description</h2>
//                         <p className="text-gray-600">{prediction.description}</p>
//                     </div>
//                 )
//             case 'precautions':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Precautions</h2>
//                         <ul className="list-disc pl-5 text-gray-600">
//                             {prediction.precautions.map((precaution, index) => (
//                                 <li key={index}>{precaution}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )
//             case 'medications':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Recommended Medications</h2>
//                         <ul className="list-disc pl-5 text-gray-600">
//                             {prediction.medications.map((medication, index) => (
//                                 <li key={index}>{medication}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )
//             case 'diet':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Dietary Recommendations</h2>
//                         <ul className="list-disc pl-5 text-gray-600">
//                             {prediction.diets.map((diet, index) => (
//                                 <li key={index}>{diet}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )
//             case 'workouts':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Workouts</h2>
//                         <ul className="list-disc pl-5 text-gray-600">
//                             {prediction.workouts.map((workout, index) => (
//                                 <li key={index}>{workout}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )
//             default:
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//                         <p className="text-gray-600">
//                             Please select a section to view more details about your symptom analysis.
//                         </p>
//                     </div>
//                 )
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
//             <div className="max-w-4xl mx-auto px-4">
//                 <div className="text-center mb-8 sm:mb-12">
//                     <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                         Smart Health Advisor
//                     </h1>
//                     <p className="mt-2 text-base sm:text-lg text-gray-600">
//                         Detailed Information about Your Potential Condition
//                     </p>
//                 </div>

//                 {/* Download Report Button */}
//                 <div className="mb-6">
//                     <button
//                         onClick={handleGeneratePDF}
//                         disabled={isGeneratingPDF}
//                         className="w-full sm:w-auto mx-auto flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                         {isGeneratingPDF ? (
//                             <>
//                                 <Loader2 className="h-5 w-5 animate-spin" />
//                                 <span>Generating PDF...</span>
//                             </>
//                         ) : (
//                             <>
//                                 <Download className="h-5 w-5" />
//                                 <span>Download Report</span>
//                             </>
//                         )}
//                     </button>
//                 </div>

//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
//                     {[
//                         { key: 'conditions', label: 'Possible Conditions' },
//                         { key: 'description', label: 'Description' },
//                         { key: 'precautions', label: 'Precautions' },
//                         { key: 'medications', label: 'Medications' },
//                         { key: 'diet', label: 'Dietary Recommendations' },
//                         { key: 'workouts', label: 'Workouts' }
//                     ].map(section => (
//                         <button
//                             key={section.key}
//                             onClick={() => setActiveSection(section.key)}
//                             className={`py-2 px-3 sm:px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base ${activeSection === section.key
//                                 ? 'bg-purple-600 text-white'
//                                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                                 }`}
//                         >
//                             {section.label}
//                         </button>
//                     ))}
//                 </div>

//                 {renderContent()}

//                 <div className="bg-yellow-50 p-4 rounded-lg mt-6 sm:mt-8">
//                     <div className="flex items-center">
//                         <AlertCircle className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
//                         <p className="text-xs sm:text-sm text-yellow-700">
//                             This is an AI-powered analysis and should not replace professional medical advice.
//                             Please consult a healthcare provider for proper diagnosis and treatment.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ResultsPage




// import React, { useState, useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { AlertCircle, Download, Loader2 } from 'lucide-react'
// import jsPDF from 'jspdf'
// import axios from 'axios'


// const ResultsPage = () => {
//     const location = useLocation()
//     const navigate = useNavigate()
//     const [activeSection, setActiveSection] = useState(null)
//     const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
//     const [userData, setUserData] = useState(null)

//     // Extract prediction from location state
//     const { prediction } = location.state || {}

//     useEffect(() => {
//         if (!prediction) {
//             navigate('/')
//         }

//         // Fetch user data when component mounts
//         const fetchUserData = async () => {
//             try {
//                 const token = localStorage.getItem('token')
//                 if (!token) {
//                     navigate('/login')
//                     return
//                 }

//                 const response = await axios.get('http://localhost:5000/api/user', {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 })
//                 setUserData(response.data)
//             } catch (error) {
//                 console.error('Error fetching user data:', error)
//                 navigate('/login')
//             }
//         }

//         fetchUserData()
//     }, [prediction, navigate])

//     if (!prediction || !userData) {
//         return null
//     }

//     const generatePDF = async (prediction, userData) => {
//         const doc = new jsPDF()

//         // Set page dimensions
//         const margin = 15
//         const pageWidth = doc.internal.pageSize.width
//         const pageHeight = doc.internal.pageSize.height
//         let yPos = margin + 10

//         // Draw border around the page
//         doc.setDrawColor(76, 175, 80) // #4CAF50
//         doc.setLineWidth(0.5)
//         doc.rect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin)

//         // Helper function to add text
//         const addText = (text, x, y, options = {}) => {
//             const { fontSize = 10, isBold = false, align = 'left', color = '#000000' } = options
//             doc.setFontSize(fontSize)
//             doc.setTextColor(color)
//             if (isBold) doc.setFont('helvetica', 'bold')
//             else doc.setFont('helvetica', 'normal')

//             if (align === 'center') {
//                 x = (pageWidth - doc.getTextWidth(text)) / 2
//             } else if (align === 'right') {
//                 x = pageWidth - margin - doc.getTextWidth(text) - 5
//             }

//             doc.text(text, x, y)
//         }

//         // Header Section
//         addText('SMART HEALTH ADVISOR', margin + 5, yPos, { fontSize: 18, isBold: true, color: '#4CAF50' })
//         addText('&e', pageWidth - margin - 10, yPos, { fontSize: 18, color: '#4CAF50' })
//         yPos += 8
//         addText('AI-Powered Medical Analysis Report', margin + 5, yPos, { fontSize: 10, color: '#666666' })
//         yPos += 15

//         // Patient Information in a table-like format
//         const col1 = margin + 5
//         const col2 = margin + 45
//         const col3 = pageWidth / 2
//         const col4 = pageWidth / 2 + 40

//         // Patient Info Row 1
//         addText('Name:', col1, yPos, { fontSize: 10, isBold: true })
//         addText(userData.firstName + ' ' + userData.lastName, col2, yPos, { fontSize: 10 })
//         addText('Report ID:', col3, yPos, { fontSize: 10, isBold: true })
//         addText(`SHA-${Math.random().toString(36).substr(2, 9).toUpperCase()}`, col4, yPos, { fontSize: 10 })
//         yPos += 10

//         // Patient Info Row 2
//         addText('Age:', col1, yPos, { fontSize: 10, isBold: true })
//         addText(userData.age.toString(), col2, yPos, { fontSize: 10 })
//         addText('Date:', col3, yPos, { fontSize: 10, isBold: true })
//         addText(new Date().toLocaleDateString(), col4, yPos, { fontSize: 10 })
//         yPos += 10

//         // Patient Info Row 3
//         addText('Gender:', col1, yPos, { fontSize: 10, isBold: true })
//         addText(userData.gender, col2, yPos, { fontSize: 10 })
//         yPos += 20

//         // Diagnosis Section
//         doc.setDrawColor(76, 175, 80)
//         doc.line(margin + 5, yPos - 5, pageWidth - margin - 5, yPos - 5)
//         addText('DIAGNOSIS', margin + 5, yPos, { fontSize: 14, isBold: true })
//         yPos += 15

//         addText('Primary Condition:', margin + 5, yPos, { fontSize: 10, isBold: true })
//         addText(prediction.disease, margin + 85, yPos, { fontSize: 10 })
//         yPos += 15

//         addText('Clinical Description:', margin + 5, yPos, { fontSize: 10, isBold: true })
//         yPos += 8
//         const descriptionLines = doc.splitTextToSize(prediction.description, pageWidth - 2 * margin - 10)
//         doc.setFontSize(10)
//         doc.text(descriptionLines, margin + 5, yPos)
//         yPos += (descriptionLines.length * 7) + 20

//         // Treatment Plan Section
//         doc.line(margin + 5, yPos - 5, pageWidth - margin - 5, yPos - 5)
//         addText('TREATMENT PLAN', margin + 5, yPos, { fontSize: 14, isBold: true })
//         yPos += 20

//         // Create columns for treatment details
//         const leftWidth = (pageWidth - 2 * margin - 15) / 2

//         // Medications and Precautions (Left Column)
//         const leftStart = yPos
//         addText('Recommended Medications:', margin + 5, yPos, { fontSize: 10, isBold: true })
//         yPos += 8
//         prediction.medications.forEach((med, index) => {
//             const bullet = `• ${med}`
//             const lines = doc.splitTextToSize(bullet, leftWidth)
//             doc.text(lines, margin + 5, yPos)
//             yPos += lines.length * 6
//         })

//         yPos = Math.max(yPos + 10, leftStart + 70)
//         addText('Precautionary Measures:', margin + 5, yPos, { fontSize: 10, isBold: true })
//         yPos += 8
//         prediction.precautions.forEach(prec => {
//             addText(`• ${prec}`, margin + 5, yPos, { fontSize: 10 })
//             yPos += 6
//         })

//         // Diet and Exercise (Right Column)
//         let rightY = leftStart
//         const rightX = pageWidth / 2 + 5
//         addText('Dietary Recommendations:', rightX, rightY, { fontSize: 10, isBold: true })
//         rightY += 8
//         prediction.diets?.forEach(diet => {
//             addText(`• ${diet}`, rightX, rightY, { fontSize: 10 })
//             rightY += 6
//         })

//         rightY = Math.max(rightY + 10, leftStart + 70)
//         addText('Recommended Exercises:', rightX, rightY, { fontSize: 10, isBold: true })
//         rightY += 8
//         prediction.workouts?.forEach(workout => {
//             addText(`• ${workout}`, rightX, rightY, { fontSize: 10 })
//             rightY += 6
//         })

//         // Footer
//         const footerY = pageHeight - margin - 15
//         doc.line(margin + 5, footerY, pageWidth - margin - 5, footerY)

//         const disclaimer = 'DISCLAIMER: This is an AI-generated analysis report for informational purposes only. Please consult a healthcare provider for proper diagnosis and treatment.'
//         const disclaimerLines = doc.splitTextToSize(disclaimer, pageWidth - 2 * margin - 10)
//         doc.setFontSize(8)
//         doc.setTextColor('#666666')
//         doc.text(disclaimerLines, margin + 5, footerY + 8)

//         // Save the PDF
//         doc.save(`SHA-Medical-Report-${userData.firstName}-${userData.lastName}-${new Date().toLocaleDateString()}.pdf`)
//     }
//     const handleGeneratePDF = async () => {
//         setIsGeneratingPDF(true)
//         try {
//             await generatePDF(prediction, userData)
//         } catch (error) {
//             console.error('Error generating PDF:', error)
//         } finally {
//             setIsGeneratingPDF(false)
//         }
//     }

//     // Render content based on active section
//     const renderContent = () => {
//         switch (activeSection) {
//             case 'conditions':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Possible Condition</h2>
//                         <p className="text-lg text-purple-600 font-semibold">
//                             {prediction.disease}
//                         </p>
//                     </div>
//                 )
//             case 'description':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Description</h2>
//                         <p className="text-gray-600">{prediction.description}</p>
//                     </div>
//                 )
//             case 'precautions':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Precautions</h2>
//                         <ul className="list-disc pl-5 text-gray-600">
//                             {prediction.precautions.map((precaution, index) => (
//                                 <li key={index}>{precaution}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )
//             case 'medications':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Recommended Medications</h2>
//                         <ul className="list-disc pl-5 text-gray-600">
//                             {prediction.medications.map((medication, index) => (
//                                 <li key={index}>{medication}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )
//             case 'diet':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Dietary Recommendations</h2>
//                         <ul className="list-disc pl-5 text-gray-600">
//                             {prediction.diets.map((diet, index) => (
//                                 <li key={index}>{diet}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )
//             case 'workouts':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4">Workouts</h2>
//                         <ul className="list-disc pl-5 text-gray-600">
//                             {prediction.workouts.map((workout, index) => (
//                                 <li key={index}>{workout}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )
//             default:
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//                         <p className="text-gray-600">
//                             Please select a section to view more details about your symptom analysis.
//                         </p>
//                     </div>
//                 )
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
//             <div className="max-w-4xl mx-auto px-4">
//                 <div className="text-center mb-8 sm:mb-12">
//                     <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                         Smart Health Advisor
//                     </h1>
//                     <p className="mt-2 text-base sm:text-lg text-gray-600">
//                         Detailed Information about Your Potential Condition
//                     </p>
//                 </div>

//                 {/* Download Report Button */}
//                 <div className="mb-6">
//                     <button
//                         onClick={handleGeneratePDF}
//                         disabled={isGeneratingPDF}
//                         className="w-full sm:w-auto mx-auto flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                         {isGeneratingPDF ? (
//                             <>
//                                 <Loader2 className="h-5 w-5 animate-spin" />
//                                 <span>Generating PDF...</span>
//                             </>
//                         ) : (
//                             <>
//                                 <Download className="h-5 w-5" />
//                                 <span>Download Report</span>
//                             </>
//                         )}
//                     </button>
//                 </div>

//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
//                     {[
//                         { key: 'conditions', label: 'Possible Conditions' },
//                         { key: 'description', label: 'Description' },
//                         { key: 'precautions', label: 'Precautions' },
//                         { key: 'medications', label: 'Medications' },
//                         { key: 'diet', label: 'Dietary Recommendations' },
//                         { key: 'workouts', label: 'Workouts' }
//                     ].map(section => (
//                         <button
//                             key={section.key}
//                             onClick={() => setActiveSection(section.key)}
//                             className={`py-2 px-3 sm:px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base ${activeSection === section.key
//                                 ? 'bg-purple-600 text-white'
//                                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                                 }`}
//                         >
//                             {section.label}
//                         </button>
//                     ))}
//                 </div>

//                 {renderContent()}

//                 <div className="bg-yellow-50 p-4 rounded-lg mt-6 sm:mt-8">
//                     <div className="flex items-center">
//                         <AlertCircle className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
//                         <p className="text-xs sm:text-sm text-yellow-700">
//                             This is an AI-powered analysis and should not replace professional medical advice.
//                             Please consult a healthcare provider for proper diagnosis and treatment.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ResultsPage









import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AlertCircle, Download, Loader2 } from 'lucide-react'
import jsPDF from 'jspdf'
import axios from 'axios'


const ResultsPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [activeSection, setActiveSection] = useState(null)
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
    const [userData, setUserData] = useState(null)

    // Extract prediction from location state
    const { prediction } = location.state || {}

    useEffect(() => {
        if (!prediction) {
            navigate('/')
        }

        // Fetch user data when component mounts
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token')
                if (!token) {
                    navigate('/login')
                    return
                }

                const response = await axios.get('http://localhost:5000/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUserData(response.data)
            } catch (error) {
                console.error('Error fetching user data:', error)
                navigate('/login')
            }
        }

        fetchUserData()
    }, [prediction, navigate])

    if (!prediction || !userData) {
        return null
    }

    const generatePDF = async (prediction, userData) => {
        const doc = new jsPDF()

        // Set page dimensions
        const margin = 10 // Reduced margin
        const pageWidth = doc.internal.pageSize.width
        const pageHeight = doc.internal.pageSize.height
        let yPos = margin + 10

        // Draw border around the page
        doc.setDrawColor(76, 175, 80)
        doc.setLineWidth(0.5)
        doc.rect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin)

        // Helper function to add text
        const addText = (text, x, y, options = {}) => {
            const { fontSize = 10, isBold = false, align = 'left', color = '#000000' } = options
            doc.setFontSize(fontSize)
            doc.setTextColor(color)
            if (isBold) doc.setFont('helvetica', 'bold')
            else doc.setFont('helvetica', 'normal')

            if (align === 'center') {
                x = (pageWidth - doc.getTextWidth(text)) / 2
            } else if (align === 'right') {
                x = pageWidth - margin - doc.getTextWidth(text)
            }

            doc.text(text, x, y)
        }

        // Header Section - Centered
        addText('SMART HEALTH ADVISOR', pageWidth / 2, yPos, { fontSize: 18, isBold: true, color: '#4CAF50', align: 'center' })
        yPos += 8
        addText('AI-Powered Medical Analysis Report', pageWidth / 2, yPos, { fontSize: 10, color: '#666666', align: 'center' })
        yPos += 15

        // Patient Information - Using full width with better spacing
        const col1 = margin + 5
        const col2 = pageWidth / 4
        const col3 = pageWidth / 2
        const col4 = (pageWidth * 3) / 4

        // Patient Info in two rows with better spacing
        addText('Name:', col1, yPos, { fontSize: 10, isBold: true })
        addText(userData.firstName + ' ' + userData.lastName, col2, yPos, { fontSize: 10 })
        addText('Report ID:', col3, yPos, { fontSize: 10, isBold: true })
        addText(`SHA-${Math.random().toString(36).substr(2, 9).toUpperCase()}`, col4, yPos, { fontSize: 10 })
        yPos += 8

        addText('Age:', col1, yPos, { fontSize: 10, isBold: true })
        addText(userData.age.toString(), col2, yPos, { fontSize: 10 })
        addText('Date:', col3, yPos, { fontSize: 10, isBold: true })
        addText(new Date().toLocaleDateString(), col4, yPos, { fontSize: 10 })
        yPos += 8

        addText('Gender:', col1, yPos, { fontSize: 10, isBold: true })
        addText(userData.gender, col2, yPos, { fontSize: 10 })
        yPos += 15

        // Diagnosis Section - Full width
        doc.setDrawColor(76, 175, 80)
        doc.line(margin + 5, yPos, pageWidth - margin - 5, yPos)
        yPos += 7
        addText('DIAGNOSIS', margin + 5, yPos, { fontSize: 14, isBold: true })
        yPos += 10

        addText('Primary Condition:', margin + 5, yPos, { fontSize: 10, isBold: true })
        addText(prediction.disease, margin + 70, yPos, { fontSize: 10 })
        yPos += 10

        addText('Clinical Description:', margin + 5, yPos, { fontSize: 10, isBold: true })
        yPos += 8
        const descriptionLines = doc.splitTextToSize(prediction.description, pageWidth - 2 * margin - 10)
        doc.text(descriptionLines, margin + 5, yPos)
        yPos += (descriptionLines.length * 6) + 15

        // Treatment Plan Section - Using two columns with better spacing
        doc.line(margin + 5, yPos, pageWidth - margin - 5, yPos)
        yPos += 7
        addText('TREATMENT PLAN', margin + 5, yPos, { fontSize: 14, isBold: true })
        yPos += 10

        const columnWidth = (pageWidth - 3 * margin) / 2
        let leftColumnY = yPos
        let rightColumnY = yPos

        // Left Column
        addText('Recommended Medications:', margin + 5, leftColumnY, { fontSize: 10, isBold: true })
        leftColumnY += 8
        prediction.medications.forEach(med => {
            const lines = doc.splitTextToSize(`• ${med}`, columnWidth)
            doc.text(lines, margin + 5, leftColumnY)
            leftColumnY += lines.length * 6
        })

        leftColumnY += 10
        addText('Precautionary Measures:', margin + 5, leftColumnY, { fontSize: 10, isBold: true })
        leftColumnY += 8
        prediction.precautions.forEach(prec => {
            const lines = doc.splitTextToSize(`• ${prec}`, columnWidth)
            doc.text(lines, margin + 5, leftColumnY)
            leftColumnY += lines.length * 6
        })

        // Right Column
        const rightColumnX = pageWidth / 2 + margin
        addText('Dietary Recommendations:', rightColumnX, rightColumnY, { fontSize: 10, isBold: true })
        rightColumnY += 8
        prediction.diets?.forEach(diet => {
            const lines = doc.splitTextToSize(`• ${diet}`, columnWidth)
            doc.text(lines, rightColumnX, rightColumnY)
            rightColumnY += lines.length * 6
        })

        rightColumnY += 10
        addText('Recommended Exercises:', rightColumnX, rightColumnY, { fontSize: 10, isBold: true })
        rightColumnY += 8
        prediction.workouts?.forEach(workout => {
            const lines = doc.splitTextToSize(`• ${workout}`, columnWidth)
            doc.text(lines, rightColumnX, rightColumnY)
            rightColumnY += lines.length * 6
        })

        // Footer - Full width at bottom
        const footerY = pageHeight - margin - 15
        doc.line(margin + 5, footerY, pageWidth - margin - 5, footerY)
        const disclaimer = 'DISCLAIMER: This is an AI-generated analysis report for informational purposes only. Please consult a healthcare provider for proper diagnosis and treatment.'
        const disclaimerLines = doc.splitTextToSize(disclaimer, pageWidth - 2 * margin - 10)
        doc.setFontSize(8)
        doc.setTextColor('#666666')
        doc.text(disclaimerLines, margin + 5, footerY + 8)

        // Save the PDF
        doc.save(`SHA-Medical-Report-${userData.firstName}-${userData.lastName}-${new Date().toLocaleDateString()}.pdf`)
    }
    const handleGeneratePDF = async () => {
        setIsGeneratingPDF(true)
        try {
            await generatePDF(prediction, userData)
        } catch (error) {
            console.error('Error generating PDF:', error)
        } finally {
            setIsGeneratingPDF(false)
        }
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
                )
            case 'description':
                return (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Description</h2>
                        <p className="text-gray-600">{prediction.description}</p>
                    </div>
                )
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
                )
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
                )
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
                )
            case 'workouts':
                return (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Workouts</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            {prediction.workouts.map((workout, index) => (
                                <li key={index}>{workout}</li>
                            ))}
                        </ul>
                    </div>
                )
            default:
                return (
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <p className="text-gray-600">
                            Please select a section to view more details about your symptom analysis.
                        </p>
                    </div>
                )
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Smart Health Advisor
                    </h1>
                    <p className="mt-2 text-base sm:text-lg text-gray-600">
                        Detailed Information about Your Potential Condition
                    </p>
                </div>

                {/* Download Report Button */}
                <div className="mb-6">
                    <button
                        onClick={handleGeneratePDF}
                        disabled={isGeneratingPDF}
                        className="w-full sm:w-auto mx-auto flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isGeneratingPDF ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                <span>Generating PDF...</span>
                            </>
                        ) : (
                            <>
                                <Download className="h-5 w-5" />
                                <span>Download Report</span>
                            </>
                        )}
                    </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                    {[
                        { key: 'conditions', label: 'Possible Conditions' },
                        { key: 'description', label: 'Description' },
                        { key: 'precautions', label: 'Precautions' },
                        { key: 'medications', label: 'Medications' },
                        { key: 'diet', label: 'Dietary Recommendations' },
                        { key: 'workouts', label: 'Workouts' }
                    ].map(section => (
                        <button
                            key={section.key}
                            onClick={() => setActiveSection(section.key)}
                            className={`py-2 px-3 sm:px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base ${activeSection === section.key
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>

                {renderContent()}

                <div className="bg-yellow-50 p-4 rounded-lg mt-6 sm:mt-8">
                    <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-yellow-700">
                            This is an AI-powered analysis and should not replace professional medical advice.
                            Please consult a healthcare provider for proper diagnosis and treatment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsPage


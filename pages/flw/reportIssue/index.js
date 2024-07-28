import { useEffect, useState } from 'react';
import { db } from '@/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const IssueForm = () => {
    const [schemeNames, setSchemeNames] = useState([]);
    const [issueTypes, setIssueTypes] = useState([
        "Unable to submit the form",
        "Form validation error",
        "Incorrect data entry",
        "Unable to upload documents",
        "Status update issues",
        "Other (provide details)"
    ]);
    const [experts, setExperts] = useState([]);
    const [selectedScheme, setSelectedScheme] = useState('');

    useEffect(() => {
        const fetchSchemeNames = async () => {
            const querySnapshot = await getDocs(collection(db, 'Grievance'));
            const schemes = querySnapshot.docs.map(doc => doc.data()['Scheme Name']);
            setSchemeNames([...new Set(schemes)]);
        };

        fetchSchemeNames();
    }, []);

    useEffect(() => {
        if (selectedScheme) {
            const fetchExperts = async () => {
                const q = query(collection(db, 'Grievance'), where('Scheme Name', '==', selectedScheme));
                const querySnapshot = await getDocs(q);
                const expertsList = querySnapshot.docs.map(doc => ({
                    name: doc.data().ResName,
                    email: doc.data().ResMail,
                    phone: doc.data().ResPhne
                }));
                setExperts(expertsList);
            };

            fetchExperts();
        } else {
            setExperts([]);
        }
    }, [selectedScheme]);

    const handleSubmit =(e)=>{
        e.preventDefault()
        toast("Your Grievance is mailed to the matter expert.")
    }

    return (
        <div className="w-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 items-center justify-center py-8 px-4 min-h-screen">
            <ToastContainer/>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <h2 className="text-3xl font-bold mb-6 text-indigo-600">Issue Reporting Form</h2>
                <form onSubmit={handleSubmit}>
                    {/* Scheme Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Scheme Name</label>
                        <select required
                            className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300"
                            value={selectedScheme}
                            onChange={(e) => setSelectedScheme(e.target.value)}
                        >
                            <option value="" disabled>Select Scheme</option>
                            {schemeNames.map((scheme, index) => (
                                <option key={index} value={scheme}>{scheme}</option>
                            ))}
                        </select>
                    </div>

                    {/* Type of Issue */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Type of Issue</label>
                        <select required className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300">
                            {issueTypes.map((issue, index) => (
                                <option key={index}>{issue}</option>
                            ))}
                        </select>
                    </div>

                    {/* Matter Expert */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Allotted Matter Expert</label>
                        <select required className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300">
                            {experts.map((expert, index) => (
                                <option key={index} value={expert.email}>
                                    {expert.name} ({expert.phone})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default IssueForm;

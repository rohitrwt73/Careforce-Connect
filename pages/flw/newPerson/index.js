import React, { useState } from 'react';
import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';
import NavBar from '@/components/NavFLW';

const FormPage = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Age: '',
        Gender: '',
        Phone: '',
        Address: '',
        AvailableDocs: [],
        FLWID: '',
        Caste: '',
        DifferentlyAbled: false,
        FamilyIncome: '',
        Minority: false,
        BPL: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const handleDocsChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            AvailableDocs: checked
                ? [...prevState.AvailableDocs, value]
                : prevState.AvailableDocs.filter(doc => doc !== value)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "Users"), formData);
            console.log("Document written with ID: ", docRef.id);
            setFormData({
                Name: '',
                Age: '',
                Gender: '',
                Phone: '',
                Address: '',
                AvailableDocs: [],
                FLWID: '',
                Caste: '',
                DifferentlyAbled: false,
                FamilyIncome: '',
                Minority: false,
                BPL: false,
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <>
            <NavBar />
            <div className="w-full bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center min-h-screen">
                <div className="mt-5 bg-white p-8 rounded-lg shadow-2xl w-full max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">User Information Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="Name"
                                value={formData.Name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-transform transform hover:scale-105"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-medium mb-1">Age</label>
                            <input
                                type="number"
                                name="Age"
                                value={formData.Age}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-transform transform hover:scale-105"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-medium mb-1">Gender</label>
                            <select
                                name="Gender"
                                value={formData.Gender}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-transform transform hover:scale-105"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-medium mb-1">Phone</label>
                            <input
                                type="tel"
                                name="Phone"
                                value={formData.Phone}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-transform transform hover:scale-105"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-medium mb-1">Address</label>
                            <textarea
                                name="Address"
                                value={formData.Address}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-transform transform hover:scale-105"
                            ></textarea>
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-medium mb-1">Available Docs</label>
                            {['Aadhar Card', 'PAN Card', 'Ration Card', 'BPL Card', 'Income Certificate'].map(doc => (
                                <div key={doc} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        name="AvailableDocs"
                                        value={doc}
                                        checked={formData.AvailableDocs.includes(doc)}
                                        onChange={handleDocsChange}
                                        className="mr-2 focus:ring-2 focus:ring-blue-300"
                                    />
                                    <label className="text-gray-700">{doc}</label>
                                </div>
                            ))}
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-medium mb-1">FLW ID</label>
                            <input
                                type="text"
                                name="FLWID"
                                value={formData.FLWID}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-transform transform hover:scale-105"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-medium mb-1">Caste</label>
                            <input
                                type="text"
                                name="Caste"
                                value={formData.Caste}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-transform transform hover:scale-105"
                            />
                        </div>
                        <div className="mb-5 flex items-center">
                            <input
                                type="checkbox"
                                name="DifferentlyAbled"
                                checked={formData.DifferentlyAbled}
                                onChange={handleCheckboxChange}
                                className="mr-2 focus:ring-2 focus:ring-blue-300 transition-transform transform hover:scale-105"
                            />
                            <label className="block text-gray-700 font-medium">Differently Abled</label>
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-medium mb-1">Family Income</label>
                            <input
                                type="number"
                                name="FamilyIncome"
                                value={formData.FamilyIncome}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-transform transform hover:scale-105"
                            />
                        </div>
                        <div className="mb-5 flex items-center">
                            <input
                                type="checkbox"
                                name="Minority"
                                checked={formData.Minority}
                                onChange={handleCheckboxChange}
                                className="mr-2 focus:ring-2 focus:ring-blue-300 transition-transform transform hover:scale-105"
                            />
                            <label className="block text-gray-700 font-medium">Minority</label>
                        </div>
                        <div className="mb-5 flex items-center">
                            <input
                                type="checkbox"
                                name="BPL"
                                checked={formData.BPL}
                                onChange={handleCheckboxChange}
                                className="mr-2 focus:ring-2 focus:ring-blue-300 transition-transform transform hover:scale-105"
                            />
                            <label className="block text-gray-700 font-medium">BPL</label>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition-transform transform hover:scale-105">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormPage;

import React, { useState } from 'react';
import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';
import AdminNavBar from '@/components/NavAdmin';

const SchemeForm = () => {
    const [formData, setFormData] = useState({
        SchemeName: '',
        Description: '',
        RequiredDocs: [],   
        EligibleGender: '',
        AgeRange: { min: '', max: '' },
        IncomeLimit: '',
        Minority: false,
        DifferentlyAbled: false,
        BPL: false,
        Caste: ''
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
            RequiredDocs: checked
                ? [...prevState.RequiredDocs, value]
                : prevState.RequiredDocs.filter(doc => doc !== value)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "Schemes"), formData);
            console.log("Document written with ID: ", docRef.id);
            setFormData({
                SchemeName: '',
                Description: '',
                RequiredDocs: [],
                EligibleGender: '',
                AgeRange: { min: '', max: '' },
                IncomeLimit: '',
                Minority: false,
                DifferentlyAbled: false,
                BPL: false,
                Caste: ''
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <>
        <AdminNavBar />
        <div className="w-full bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center min-h-screen">
            <div className="mt-5 bg-white p-8 rounded-lg shadow-2xl w-full max-w-5xl">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Scheme Information Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-1">Scheme Name</label>
                        <input
                            type="text"
                            name="SchemeName"
                            value={formData.SchemeName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-1">Description</label>
                        <textarea
                            name="Description"
                            value={formData.Description}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                        ></textarea>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-1">Required Docs</label>
                        {['Aadhar Card', 'PAN Card', 'Ration Card', 'BPL Card', 'Income Certificate'].map(doc => (
                            <div key={doc} className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    name="RequiredDocs"
                                    value={doc}
                                    checked={formData.RequiredDocs.includes(doc)}
                                    onChange={handleDocsChange}
                                    className="mr-2"
                                />
                                <label>{doc}</label>
                            </div>
                        ))}
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-1">Eligible Gender</label>
                        <select
                            name="EligibleGender"
                            value={formData.EligibleGender}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-1">Age Range</label>
                        <div className="flex">
                            <input
                                type="number"
                                name="AgeRangeMin"
                                placeholder="Min"
                                value={formData.AgeRange.min}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    AgeRange: { ...formData.AgeRange, min: e.target.value }
                                })}
                                className="mt-1 block w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                            />
                            <input
                                type="number"
                                name="AgeRangeMax"
                                placeholder="Max"
                                value={formData.AgeRange.max}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    AgeRange: { ...formData.AgeRange, max: e.target.value }
                                })}
                                className="mt-1 ml-2 block w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-1">Income Limit</label>
                        <input
                            type="number"
                            name="IncomeLimit"
                            value={formData.IncomeLimit}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-1">Minority</label>
                        <input
                            type="checkbox"
                            name="Minority"
                            checked={formData.Minority}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                        />
                        <label>Yes</label>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-1">Differently Abled</label>
                        <input
                            type="checkbox"
                            name="DifferentlyAbled"
                            checked={formData.DifferentlyAbled}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                        />
                        <label>Yes</label>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-1">BPL</label>
                        <input
                            type="checkbox"
                            name="BPL"
                            checked={formData.BPL}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                        />
                        <label>Yes</label>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-1">Caste</label>
                        <input
                            type="text"
                            name="Caste"
                            value={formData.Caste}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default SchemeForm;

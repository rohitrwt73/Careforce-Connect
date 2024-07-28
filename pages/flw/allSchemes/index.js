// pages/schemes/index.js
import React, { useState, useEffect } from 'react';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import NavBar from '@/components/NavFLW';

const SchemesList = () => {
    const [schemes, setSchemes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSchemes = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Schemes"));
                const schemesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setSchemes(schemesData);
            } catch (error) {
                console.error("Error fetching schemes: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSchemes();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
                <div className="text-center">
                    <div className="loader">Loading...</div>
                    <p className="text-gray-700">Fetching schemes...</p>
                </div>
            </div>
        );
    }

    return (
        <>
        <NavBar/>
        <div className="min-h-screen bg-gray-100 p-5">
            <div className="max-w-6xl mx-auto p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Available Schemes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {schemes.map(scheme => (
                        <div key={scheme.id} className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{scheme.SchemeName}</h2>
                            <p className="text-gray-600 mb-4">{scheme.Description}</p>
                            <Link href={`/flw/allSchemes/${scheme.id}`} className="text-blue-500 hover:underline">View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default SchemesList;

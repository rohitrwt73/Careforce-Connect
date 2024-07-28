import React, { useEffect, useState } from 'react';
import { db } from '@/firebase'; // Adjust the import path based on your project structure
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

const NewSchemes = () => {
    const [schemes, setSchemes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSchemes = async () => {
            setLoading(true);
            try {
                const querySnapshot = await getDocs(collection(db, "NewSchemes"));
                const schemesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setSchemes(schemesData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching schemes: ", error);
                setLoading(false);
            }
        };

        fetchSchemes();
    }, []);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-white text-gray-800">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 p-5">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">New Schemes for Mentor Review</h1>
                {schemes.map(scheme => (
                    <div key={scheme.id} className="bg-white p-6 mb-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">{scheme.SchemeName}</h2>
                        <div className="mb-4">
                            <strong>Benefits:</strong>
                            <p className="text-gray-600">{scheme.Benefits}</p>
                        </div>
                        <div className="mb-4">
                            <strong>Details:</strong>
                            <p className="text-gray-600">{scheme.Details}</p>
                        </div>
                        <div>
                            <strong>Eligibility:</strong>
                            <p className="text-blue-600 hover:underline">
                                <Link href={scheme.Eligibility ? scheme.Eligibility : "https://pib.gov.in/allRel.aspx"} target="_blank" rel="noopener noreferrer">
                                    View Eligibility Criteria
                                </Link>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewSchemes;

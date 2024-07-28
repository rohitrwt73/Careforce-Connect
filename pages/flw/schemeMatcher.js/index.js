import React, { useState, useEffect } from 'react';
import { db } from '@/firebase';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import Link from 'next/link';
import NavBar from '@/components/NavFLW';

const UserFormAndEligibleSchemes = () => {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [eligibleSchemes, setEligibleSchemes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Users"));
                const usersData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setUsers(usersData);
            } catch (error) {
                console.error("Error fetching users: ", error);
            }
        };
        fetchUsers();
    }, []);

    const fetchUserData = async (userId) => {
        try {
            const userDoc = await getDoc(doc(db, "Users", userId));
            return userDoc.exists() ? userDoc.data() : null;
        } catch (error) {
            console.error("Error fetching user data: ", error);
            return null;
        }
    };

    const fetchSchemes = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Schemes"));
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error("Error fetching schemes: ", error);
            return [];
        }
    };

    const checkEligibility = (userData, scheme) => {
        if (scheme.EligibleGender && scheme.EligibleGender !== userData.Gender) return false;
        if (scheme.AgeRange && (userData.Age < scheme.AgeRange.min || userData.Age > scheme.AgeRange.max)) return false;
        if (scheme.IncomeLimit && userData.FamilyIncome > scheme.IncomeLimit) return false;
        if (scheme.Minority && !userData.Minority) return false;
        if (scheme.DifferentlyAbled && !userData.DifferentlyAbled) return false;
        if (scheme.BPL && !userData.BPL) return false;
        if (scheme.Caste && scheme.Caste !== userData.Caste) return false;

        return true;
    };

    const findEligibleSchemes = async (userId) => {
        setLoading(true);
        const userData = await fetchUserData(userId);
        if (!userData) {
            setEligibleSchemes([]);
            setLoading(false);
            return;
        }

        const schemes = await fetchSchemes();
        const eligible = schemes.filter(scheme => checkEligibility(userData, scheme));
        setEligibleSchemes(eligible);
        setLoading(false);
    };

    const handleUserChange = (e) => {
        const selectedUserId = e.target.value;
        setSelectedUserId(selectedUserId);
        findEligibleSchemes(selectedUserId);
    };

    return (
        <>
        <NavBar/>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
            <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-bold mb-4">Select User</h2>
                <select
                    value={selectedUserId}
                    onChange={handleUserChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="">Select a user</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.Name} - {user.Phone}
                        </option>
                    ))}
                </select>
            </div>
            <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Eligible Schemes</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {eligibleSchemes.length > 0 ? (
                            <ul>
                                {eligibleSchemes.map(scheme => (
                                    <li key={scheme.id} className="mb-2">
                                        <strong>{scheme.SchemeName}</strong>
                                        <Link href={`/flw/allSchemes/${scheme.id}`} className='bg-blue-500 text-white font-bold p-2 mx-2'>More Details</Link>
                                        <Link href={`/flw/apply/${selectedUserId}/${scheme.SchemeName}/${scheme.id}`} className='bg-blue-500 text-white font-bold p-2 mx-2'>Apply Now</Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No eligible schemes found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default UserFormAndEligibleSchemes;

import { useEffect, useState } from 'react';
import { db } from '@/firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import AdminNavBar from '@/components/NavAdmin';

const FetchDataComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const querySnapshot = await getDocs(collection(db, "flw"));
                const dataList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(dataList);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleVerify = async (id) => {
        try {
            const docRef = doc(db, "flw", id);
            await updateDoc(docRef, { verified: true });
            setData(prevData => prevData.map(item => item.id === id ? { ...item, verified: true } : item));
        } catch (error) {
            console.error("Error verifying user: ", error);
        }
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-gray-200 text-gray-800">Loading...</div>;
    }

    return (
        <>
        <AdminNavBar />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 text-gray-800 p-5">
                <h1 className="text-3xl mb-6 font-bold text-blue-800">All FLWs</h1>
                <ul className="w-full max-w-3xl">
                    {data.map(item => (
                        <li key={item.id} className="bg-white p-6 mb-4 rounded-lg shadow-lg">
                            <div className="mb-2">
                                <strong>Name:</strong> {item.name}
                            </div>
                            <div className="mb-2">
                                <strong>Email:</strong> {item.email}
                            </div>
                            <div className="mb-2">
                                <strong>Phone:</strong> {item.phone}
                            </div>
                            <div className="mb-2">
                                <strong>Verified:</strong> {item.verified ? 'Yes' : 'No'}
                            </div>
                            {!item.verified && (
                                <button
                                    onClick={() => handleVerify(item.id)}
                                    className="bg-gray-800 text-white p-2 rounded mt-4 hover:bg-gray-900"
                                >
                                    Verify
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default FetchDataComponent;

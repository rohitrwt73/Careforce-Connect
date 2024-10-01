// pages/applications/index.js

import { useEffect, useState } from 'react';
import { db } from '@/firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import AdminNavBar from '@/components/NavAdmin';

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'applications'));
        const apps = [];
        querySnapshot.forEach((doc) => {
          apps.push({ id: doc.id, ...doc.data() });
        });
        setApplications(apps);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <>
    <AdminNavBar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">All Applications</h1>
        {applications.length === 0 ? (
          <p className="text-center text-gray-600">No applications found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((application) => (
              <div key={application.id} className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-2">{application.schemeName}</h2>
                <p><strong>User ID:</strong> {application.userId}</p>
                <p><strong>Drive Link:</strong> <a href={`https://${application.driveLink}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{application.driveLink}</a></p>
                {/* Add more fields as necessary */}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Applications;

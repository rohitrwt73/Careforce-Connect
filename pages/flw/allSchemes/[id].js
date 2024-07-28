import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import NavBar from '@/components/NavFLW';

const SchemeDetails = () => {
  const [scheme, setScheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchScheme = async () => {
        try {
          const docRef = doc(db, "Schemes", id); // Use the "Scheme" collection
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setScheme(docSnap.data());
          } else {
            console.error("No such document!");
          }
        } catch (error) {
          console.error("Error fetching scheme details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchScheme();
    }
  }, [id]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!scheme) {
    return <div className="flex items-center justify-center min-h-screen">Scheme not found.</div>;
  }

  return (
    <>
      <NavBar />
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="bg-white max-w-4xl mx-auto p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">{scheme.SchemeName}</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white text-black border border-gray-300">
              <thead>
                <tr>
                  <th className="py-3 px-6 text-left bg-gray-200">Field</th>
                  <th className="py-3 px-6 text-left bg-gray-200">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-6 font-semibold">Gender</td>
                  <td className="py-4 px-6">{scheme.EligibleGender}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-6 font-semibold">Age</td>
                  <td className="py-4 px-6">{scheme.AgeRange.min} to {scheme.AgeRange.max}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-6 font-semibold">Is Minority Only Eligible</td>
                  <td className="py-4 px-6">{scheme.Minority === true ? "True" : "False"}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-6 font-semibold">Only for BPL</td>
                  <td className="py-4 px-6">{scheme.BPL ? "True" : "False"}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-6 font-semibold">Details</td>
                  <td className="py-4 px-6">{scheme.Description}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-6 font-semibold">Income Limit</td>
                  <td className="py-4 px-6">{scheme.IncomeLimit}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-6 font-semibold">Documents</td>
                  <td className="py-4 px-6">{scheme.RequiredDocs.join(', ')}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-6 font-semibold">Only for Differently Abled</td>
                  <td className="py-4 px-6">{scheme.DifferentlyAbled ? "True" : "False"}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-6 font-semibold">Caste Eligibility</td>
                  <td className="py-4 px-6">{scheme.Caste}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchemeDetails;

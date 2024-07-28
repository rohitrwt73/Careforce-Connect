// pages/apply/[uid]/[name]/[sid].js
import { useRouter } from "next/router";
import React, { useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import NavBar from "@/components/NavFLW";

const ApplyPage = () => {
  const router = useRouter();
  const { uid, name, sid } = router.query;
  const [driveLink, setDriveLink] = useState("");

  const handleUpload = async () => {
    if (!uid || !name || !sid) {
      console.error("Missing parameters");
      return;
    }

    try {
      const colRef = collection(db, "applications")
      await addDoc(colRef, {
        userId: uid,
        schemeName: name,
        schemeId: sid,
        driveLink,
      });
      toast("Application submitted successfully");
      setDriveLink("")
    } catch (error) {
      console.error("Error submitting application: ", error);
    }
  };

  return (
    <>
      <NavBar />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f7fafc' }}>
        <ToastContainer />
        <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: '#1a202c' }}>Application Details</h1>
        <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#ffffff', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#4a5568' }}>User ID</label>
            <input
              type="text"
              value={uid || ""}
              readOnly
              style={{ marginTop: '4px', padding: '12px', width: '100%', border: '1px solid #cbd5e0', borderRadius: '8px', backgroundColor: '#e2e8f0', color: '#1a202c' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#4a5568' }}>Scheme Name</label>
            <input
              type="text"
              value={name || ""}
              readOnly
              style={{ marginTop: '4px', padding: '12px', width: '100%', border: '1px solid #cbd5e0', borderRadius: '8px', backgroundColor: '#e2e8f0', color: '#1a202c' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#4a5568' }}>Scheme ID</label>
            <input
              type="text"
              value={sid || ""}
              readOnly
              style={{ marginTop: '4px', padding: '12px', width: '100%', border: '1px solid #cbd5e0', borderRadius: '8px', backgroundColor: '#e2e8f0', color: '#1a202c' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#4a5568' }}>Drive Link</label>
            <input
              type="text"
              value={driveLink}
              onChange={(e) => setDriveLink(e.target.value)}
              placeholder="Enter Drive Link"
              style={{ marginTop: '4px', padding: '12px', width: '100%', border: '1px solid #cbd5e0', borderRadius: '8px', backgroundColor: '#ffffff', color: '#1a202c' }}
              required
            />
          </div>
          <button
            onClick={handleUpload}
            style={{ width: '100%', padding: '12px', marginTop: '16px', backgroundColor: '#3182ce', color: '#ffffff', borderRadius: '8px', border: 'none', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2b6cb0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3182ce'}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ApplyPage;

// pages/api/login/flw
import { db } from '../../../firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';
import bcrypt from 'bcryptjs';


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { uid, password } = req.body;

  try {
    // Check if all required fields are provided
    if (!uid || !password) {
      res.status(400).json({ message: 'Missing required fields' });
    }

    // Find user in Firestore
    const usersRef = collection(db, 'flw');
    const q = query(usersRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        res.status(401).json({ message: 'Invalid credentials' });
    }

    const userDoc = querySnapshot.docs[0];
    const user = userDoc.data();

    // Verify password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch || user.verified==false) {
        res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = { userId: userDoc.id }

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
}

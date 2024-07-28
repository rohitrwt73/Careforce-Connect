// api/register/flw
import { db } from '../../../firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
      res.status(405).json({"message":"METHOD_NOT_ALLWED"}) // Method Not Allowed
  }

  const { uid, password, name, dob, gender, phone, email, aadhaar } = req.body;

  try {
    const passwordHash = bcrypt.hashSync(password, 10)

    // Store user data in Firestore
    const usersRef = collection(db, 'flw');
    await addDoc(usersRef, {
      uid,
      passwordHash,
      name,
      dob,
      gender,
      phone,
      email,
      aadhaar,
      verified: false,
      createdAt: new Date(),
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error });
  }
}

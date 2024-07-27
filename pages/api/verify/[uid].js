import { db } from "@/firebase"
import {collection, query, where, updateDoc, doc,getDocs} from "firebase/firestore"

export default async function handler(req, res){
    if(req.method!=="POST"){
      res.status(405).json({"message":"METHOD_NOT_ALLWED"}) // Method Not Allowed
    }
    
    const {uid} = req.query

    try{
        const flwRef = collection(db, 'flw');
        const q = query(flwRef, where('uid', '==', uid))
        const querySnapshot = await getDocs(q);
        const docid = querySnapshot.docs[0].id
        const userRef = doc(db, "flw", docid)
        const newdoc = await updateDoc(userRef, {
            verified: true,
          });
        res.status(200).json({"message":"FLW_VERIFIED_SUCCESSFULLY"}) 
    }
    catch(err){
        res.status(400).json({"message":err.message})
    }



}
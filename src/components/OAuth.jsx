import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import {useNavigate} from "react-router-dom"
export default function OAuth() {

  const navigate = useNavigate()
 async function onGoogleClick(){
     try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const  result = await signInWithPopup
      (auth, provider)
      const user = result.user
      
      //check already user exist in database 

      const docRef = doc(db,"users",user.uid)
      const docSnap = await getDoc(docRef)

      if(!docSnap.exists()){
        await setDoc(docRef, {
          name:user.displayName,
          email:user.email,
          timestamp: serverTimestamp()
        }
        )
      }
     navigate('/')
      
     } catch (error) {
      toast.error("Couldn't authorized by Google")
      console.log(error)
      
     }
  }
  return (
    <button type='button'
    onClick={onGoogleClick}
    className=' w-full flex items-center justify-center
      bg-red-600 text-white py-3 px-3 uppercase rounded-lg
       font-medium text-sm hover:bg-red-800 
       active:bg-red-900 hover:shadow-lg
        active:shadow-lg transition duration-150 ease-in-out'>
      <FcGoogle 
      className=' text-2xl space-x-1 bg-white rounded-full
        mr-2'/>
      Continue with Google
    </button>
  )
}

import React from 'react'
import { FcGoogle } from "react-icons/fc";
export default function OAuth() {
  return (
    <button className=' w-full flex items-center justify-center
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

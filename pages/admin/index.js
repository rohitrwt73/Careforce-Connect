import React from 'react'
import Link from 'next/link'
import NavBar from '@/components/NavAdmin'
const Page = () => {
  return (
    <>
    <NavBar/>
    <div className='flex flex-col items-center justify-center min-h-[90vh] bg-gray-800'>
    <div className="grid grid-cols-2 gap-2 p-4">
        <Link href='/admin/fetchNewScheme'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-600 p-6 text-white">
        <div className="font-bold text-xl mb-2">Fetch New Schemes</div>
        <p className="text-base">
         Fetch New Schemes 
        </p>
      </div>
      </Link>
      <Link href='/admin/insertNewScheme'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-purple-500 p-6 text-white">
        <div className="font-bold text-xl mb-2">Insert New Scheme</div>
        <p className="text-base">
          Insert New Scheme
        </p>
      </div>
      </Link>
      <Link href='/admin/seeCSUM'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-500 p-6 text-white">
        <div className="font-bold text-xl mb-2">See User and Scheme Mappings</div>
        <p className="text-base">
          See current user and Scheme Mappings
        </p>
      </div>
      </Link>
      <Link href='/admin/viewFLW'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-red-500 p-6 text-white">
        <div className="font-bold text-xl mb-2">View FLW</div>
        <p className="text-base">
          View Front Line Worker
        </p>
      </div>
      </Link>
    </div>
    </div>
    </>
  )
}

export default Page
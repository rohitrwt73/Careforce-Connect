import Link from 'next/link';
import NavBar from '@/components/NavFLW';

const Page = () => {
  return (
      <>
      <NavBar />
    <div className='flex flex-col items-center justify-center min-h-[90vh] bg-gray-800'>
      <div className="grid grid-cols-2 gap-2">
        <Link href='/flw/allSchemes'>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-600 p-6 text-white hover:bg-teal-700 transition-colors duration-300">
            <div className="font-bold text-xl mb-2">View All Schemes</div>
            <p className="text-base">
              View the latest and grouped schemes published by the government.
            </p>
          </div>
        </Link>
        <Link href='/flw/newPerson'>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-purple-600 p-6 text-white hover:bg-purple-700 transition-colors duration-300">
            <div className="font-bold text-xl mb-2">Add New User</div>
            <p className="text-base">
              Add a new user to the system. This user will later recieve scheme benifits.
            </p>
          </div>
        </Link>
        <Link href='/flw/schemeMatcher'>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-600 p-6 text-white hover:bg-blue-700 transition-colors duration-300">
            <div className="font-bold text-xl mb-2">Scheme Matcher</div>
            <p className="text-base">
              Access the Special Matcher that filters beneficiaries based on the scheme eligibility.
            </p>
          </div>
        </Link>
        <Link href='/flw/reportIssue'>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-red-600 p-6 text-white hover:bg-red-700 transition-colors duration-300">
            <div className="font-bold text-xl mb-2">Report Issue</div>
            <p className="text-base">
              Access the contact details of the persons associated with the matter. 
            </p>
          </div>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Page;

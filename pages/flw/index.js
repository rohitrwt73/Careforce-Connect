import Link from 'next/link';
import NavBar from '@/components/NavFLW';

const Page = () => {
  return (
    <>
      <NavBar />
      <div className='flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300'>
        <div className="grid grid-cols-2 gap-6">
          <Link href='/flw/allSchemes'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-600 p-6 text-white hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
              <div className="font-bold text-xl mb-2">View All Schemes</div>
              <p className="text-base">
                View the latest and grouped schemes published by the government.
              </p>
            </div>
          </Link>
          <Link href='/flw/newPerson'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-orange-600 p-6 text-white hover:bg-orange-700 transition-colors duration-300 transform hover:scale-105">
              <div className="font-bold text-xl mb-2">Add New User</div>
              <p className="text-base">
                Add a new user to the system. This user will later receive scheme benefits.
              </p>
            </div>
          </Link>
          <Link href='/flw/schemeMatcher'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-yellow-600 p-6 text-white hover:bg-yellow-700 transition-colors duration-300 transform hover:scale-105">
              <div className="font-bold text-xl mb-2">Scheme Matcher</div>
              <p className="text-base">
                Access the Special Matcher that filters beneficiaries based on the scheme eligibility.
              </p>
            </div>
          </Link>
          <Link href='/flw/reportIssue'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-green-600 p-6 text-white hover:bg-green-700 transition-colors duration-300 transform hover:scale-105">
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

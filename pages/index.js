// components/Home.js
import Navbar from "@/components/Navbar";
import { FaUserCheck, FaClipboardList, FaRegFileAlt, FaQuestionCircle, FaExclamationTriangle, FaClipboardCheck, FaCheckCircle } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 text-gray-800 flex flex-col items-center">
      <Navbar />
      <main className="w-full mt-8 max-w-4xl px-4 py-8 md:px-8 lg:px-16 bg-white shadow-2xl rounded-2xl transform transition-transform hover:scale-105">
        <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-6 transition-transform transform hover:scale-110">
          Indus Action
        </h1>
        <p className="text-center text-xl text-gray-700 mb-10 transition-opacity duration-500 hover:opacity-75">
          We bridge the gap between policy and action by easing welfare access to vulnerable citizens.
        </p>

        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 transition-transform transform hover:scale-110">
              1 million+ Citizens supported with Welfare Entitlements worth INR ~1,100 cr
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                Education
              </h3>
              <p className="text-gray-700 mb-1">638,631 children</p>
              <p className="text-gray-700 mb-1">secured admissions as per the Right to Education Act</p>
              <p className="text-gray-700">INR 715 cr. welfare unlocked</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                Maternal Health
              </h3>
              <p className="text-gray-700 mb-1">172,446 mothers</p>
              <p className="text-gray-700 mb-1">supported with maternity benefits under the National Food Security Act</p>
              <p className="text-gray-700">INR 86 cr. welfare unlocked</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                Livelihoods
              </h3>
              <p className="text-gray-700 mb-1">282,417 citizens</p>
              <p className="text-gray-700 mb-1">availed with entitlements under various state provisions</p>
              <p className="text-gray-700">INR 245 cr. welfare unlocked</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                Employability
              </h3>
              <p className="text-gray-700 mb-1">362,417 citizens</p>
              <p className="text-gray-700 mb-1">availed with entitlements under various central provisions</p>
              <p className="text-gray-700">INR 300 cr. welfare unlocked</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 transition-transform transform hover:scale-105">
            Solution - What We Need to Solve For...
          </h3>
          <p className="text-gray-700 mb-6 transition-opacity duration-500 hover:opacity-75">
            We are solving for the Field Level Workers, who are acting as the bridge between the citizen and the system to facilitate welfare unlock.
          </p>
          <ul className="list-none space-y-3 text-gray-700">
            <li className="flex items-start space-x-2 transition-opacity duration-500 hover:opacity-75">
              <FaUserCheck className="text-blue-700 mt-1" />
              <span>Identify the citizens who need support.</span>
            </li>
            <li className="flex items-start space-x-2 transition-opacity duration-500 hover:opacity-75">
              <FaClipboardList className="text-blue-700 mt-1" />
              <span>Match the citizen profiles with scheme eligibility.</span>
            </li>
            <li className="flex items-start space-x-2 transition-opacity duration-500 hover:opacity-75">
              <FaRegFileAlt className="text-blue-700 mt-1" />
              <span>Support the citizen with making informed scheme selection.</span>
            </li>
            <li className="flex items-start space-x-2 transition-opacity duration-500 hover:opacity-75">
              <FaClipboardList className="text-blue-700 mt-1" />
              <span>Support them with collecting all documents for application.</span>
            </li>
            <li className="flex items-start space-x-2 transition-opacity duration-500 hover:opacity-75">
              <FaRegFileAlt className="text-blue-700 mt-1" />
              <span>Guide them with documents they need to create and from where.</span>
            </li>
            <li className="flex items-start space-x-2 transition-opacity duration-500 hover:opacity-75">
              <FaClipboardCheck className="text-blue-700 mt-1" />
              <span>Support them filling and submitting application.</span>
            </li>
            <li className="flex items-start space-x-2 transition-opacity duration-500 hover:opacity-75">
              <FaQuestionCircle className="text-blue-700 mt-1" />
              <span>Support them with resolving their queries.</span>
            </li>
            <li className="flex items-start space-x-2 transition-opacity duration-500 hover:opacity-75">
              <FaExclamationTriangle className="text-blue-700 mt-1" />
              <span>Support with reporting their grievances with the department.</span>
            </li>
            <li className="flex items-start space-x-2 transition-opacity duration-500 hover:opacity-75">
              <FaClipboardCheck className="text-blue-700 mt-1" />
              <span>Support with tracking status of their application.</span>
            </li>
            <li className="flex items-start space-x-2 transition-opacity duration-500 hover:opacity-75">
              <FaCheckCircle className="text-blue-700 mt-1" />
              <span>Seek confirmation from citizen after benefit disbursal.</span>
            </li>
          </ul>
        </div>

      </main>

      <div className="mt-8 p-4 text-blue-700 font-bold text-center transition-transform transform hover:scale-110">
        2023 © Indus Action
      </div>
    </div>
  );
}

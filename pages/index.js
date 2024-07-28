// components/Home.js
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center">
      <Navbar />
      <main className="w-full mt-8 max-w-4xl px-4 py-8 md:px-8 lg:px-16 bg-gray-800 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-teal-400 mb-6">
          Indus Action
        </h1>
        <p className="text-center text-lg text-gray-300 mb-8">
          We bridge the gap between policy and action by easing welfare access to vulnerable citizens.
        </p>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-teal-400 mb-2">
              1 million+ Citizens supported with Welfare Entitlements worth INR ~1,100 cr
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-teal-400 mb-2">
                Education
              </h3>
              <p className="text-gray-300 mb-1">638,631 children</p>
              <p className="text-gray-300 mb-1">secured admissions as per the Right to Education Act</p>
              <p className="text-gray-300">INR 715 cr. welfare unlocked</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-teal-400 mb-2">
                Maternal Health
              </h3>
              <p className="text-gray-300 mb-1">172,446 mothers</p>
              <p className="text-gray-300 mb-1">supported with maternity benefits under the National Food Security Act</p>
              <p className="text-gray-300">INR 86 cr. welfare unlocked</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-teal-400 mb-2">
                Livelihoods
              </h3>
              <p className="text-gray-300 mb-1">282,417 citizens</p>
              <p className="text-gray-300 mb-1">availed with entitlements under various state provisions</p>
              <p className="text-gray-300">INR 245 cr. welfare unlocked</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-teal-400 mb-4">
            Solution - what we need to solve for...
          </h3>
          <p className="text-gray-300 mb-4">
            We are solving for the Field Level Workers, who are acting as the bridge between the citizen and the system to facilitate welfare unlock.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Identify the citizens who need support.</li>
            <li>Match the citizen profiles with scheme eligibility.</li>
            <li>Support the citizen with making informed scheme selection.</li>
            <li>Support them with collecting all documents for application.</li>
            <li>Guide them with documents they need to create and from where.</li>
            <li>Support them filling and submitting application.</li>
            <li>Support them with resolving their queries.</li>
            <li>Support with reporting their grievances with the department.</li>
            <li>Support with tracking status of their application.</li>
            <li>Seek confirmation from citizen after benefit disbursal.</li>
          </ul>
        </div>
      </main>
      
      <div className="mt-8 p-4 text-teal-400 font-bold text-center">
        2023 © Indus Action
      </div>
    </div>
  );
}

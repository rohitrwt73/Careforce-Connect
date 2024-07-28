const IssueForm = () => {
    return (
        <div className="w-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 items-center justify-center py-8 px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <h2 className="text-3xl font-bold mb-6 text-indigo-600">Issue Reporting Form</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Name</label>
                        <input type="text" className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Email Address</label>
                        <input type="email" className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Phone Number</label>
                        <input type="tel" className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300" />
                    </div>

                    {/* Application Details */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Application ID</label>
                        <input type="text" className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Scheme Name</label>
                        <input type="text" className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Submission Date</label>
                        <input type="date" className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300" />
                    </div>

                    {/* Issue Details */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Type of Issue</label>
                        <select className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300">
                            <option>Unable to submit the form</option>
                            <option>Form validation error</option>
                            <option>Incorrect data entry</option>
                            <option>Unable to upload documents</option>
                            <option>Status update issues</option>
                            <option>Other (provide details)</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Description of the Issue</label>
                        <textarea className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300"></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Steps to Reproduce the Issue</label>
                        <textarea className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300"></textarea>
                    </div>

                    {/* Additional Information */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Screenshots or Documents</label>
                        <input type="file" className="mt-2 block w-full text-gray-700" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Preferred Method of Contact</label>
                        <select className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300">
                            <option>Email</option>
                            <option>Phone</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default IssueForm;

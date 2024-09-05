import React, { useState } from 'react';

const JobPortal = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add job posting logic here
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold">Job Portal</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Job Title:
          <input
            type="text"
            value={jobTitle}
            onChange={(event) => setJobTitle(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Job Description:
          <textarea
            value={jobDescription}
            onChange={(event) => setJobDescription(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            />
          </label>
          <label className="block mb-2">
            Job Location:
            <input
              type="text"
              value={jobLocation}
              onChange={(event) => setJobLocation(event.target.value)}
              className="w-full p-2 pl-10 text-sm text-gray-700"
            />
          </label>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Post Job
          </button>
        </form>
      </div>
    );
  };

  export default JobPortal;

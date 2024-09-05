import React, { useState } from 'react';

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    // Add search logic here
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold">Alumni Directory</h1>
      <form onSubmit={handleSearch}>
        <label className="block mb-2">
          Search for alumni:
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            <h2 className="text-lg font-bold">{result.name}</h2>
            <p className="text-sm">{result.graduationYear}</p>
            <p className="text-sm">{result.fieldOfStudy}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlumniDirectory;

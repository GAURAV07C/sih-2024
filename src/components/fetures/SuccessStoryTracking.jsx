import React, { useState } from 'react';

const SuccessStoryTracking = () => {
  const [storyTitle, setStoryTitle] = useState('');
  const [storyDescription, setStoryDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add success story tracking logic here
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold">Success Story Tracking</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Story Title:
          <input
            type="text"
            value={storyTitle}
            onChange={(event) => setStoryTitle(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Story Description:
          <textarea
            value={storyDescription}
            onChange={(event) => setStoryDescription(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Share Your Story
        </button>
      </form>
    </div>
  );
};

export default SuccessStoryTracking;

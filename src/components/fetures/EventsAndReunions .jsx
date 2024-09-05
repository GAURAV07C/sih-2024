import React, { useState } from 'react';

const EventsAndReunions = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add event and reunion logic here
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold">Events and Reunions</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Event Name:
          <input
            type="text"
            value={eventName}
            onChange={(event) => setEventName(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
                  </label>
        <label className="block mb-2">
          Event Description:
          <textarea
            value={eventDescription}
            onChange={(event) => setEventDescription(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Event Date:
          <input
            type="date"
            value={eventDate}
            onChange={(event) => setEventDate(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventsAndReunions;

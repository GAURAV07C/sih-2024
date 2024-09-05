import React, { useState } from 'react';

const DonationPortal = () => {
  const [amount, setAmount] = useState('');
  const [donationType, setDonationType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add donation logic here
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold">Donation Portal</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Donation Type:
          <select
            value={donationType}
            onChange={(event) => setDonationType(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          >
            <option value="">Select a donation type</option>
            <option value="one-time">One-time donation</option>
            <option value="recurring">Recurring donation</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Donate
        </button>
      </form>
    </div>
  );
};

export default DonationPortal;

import React from 'react';

const LandingPage = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold">Alumni Association Platform</h1>
      <p className="text-lg">Connecting graduates, fostering lifelong connections, and supporting the alma mater.</p>
      <div className="flex flex-wrap justify-center mb-4">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-4">
          Register
        </button>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
      <div className="text-lg">
        <p>Stay connected with your alma mater and fellow alumni through our platform.</p>
        <p>Explore job opportunities, network with peers, and contribute to the growth of your institution.</p>
      </div>
    </div>
  );
};

export default LandingPage;

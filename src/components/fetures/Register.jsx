import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add registration logic here
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold">Register</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Graduation Year:
          <input
            type="number"
            value={graduationYear}
            onChange={(event) => setGraduationYear(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Field of Study:
          <input
            type="text"
            value={fieldOfStudy}
            onChange={(event) => setFieldOfStudy(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
           <a href="/login"
          > login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;

import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Submit:', { email, password });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {error && (
          <div className="bg-red-100 border-red-400 text-red-700 p-2 mb-4 rounded">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            Sign In
          </button>
          <p className='text:xl m-2 '>This Form is meant for Admins Only</p>
        </form>
      </div>
      
    </div>
  );
}

export default SignIn
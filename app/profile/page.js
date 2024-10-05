// pages/profile.js
import React from 'react';
import Dashboard from '../components/Dashboard';

const Profile = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisi id libero cursus condimentum.",
  };

  return (
    <Dashboard>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Profile Page</h2>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold">User Information</h3>
          <p className="mt-2"><strong>Name:</strong> {user.name}</p>
          <p className="mt-2"><strong>Email:</strong> {user.email}</p>
          <p className="mt-2"><strong>Bio:</strong> {user.bio}</p>
          
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
      </div>
    </Dashboard>
  );
};

export default Profile;

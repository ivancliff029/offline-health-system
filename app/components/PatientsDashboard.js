import React from 'react';

const PatientDashboard = ({ totalPatients, ongoingRequests, totalConsultations, totalFirstAidRequests }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Total Patients */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-700">{totalPatients}</h2>
        <p className="text-gray-500">All Patients</p>
      </div>

      {/* Ongoing Requests */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-700">{ongoingRequests}</h2>
        <p className="text-gray-500">Ongoing Requests</p>
      </div>

      {/* Total Consultations */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-700">{totalConsultations}</h2>
        <p className="text-gray-500">All Consultations</p>
      </div>

      {/* Total First Aid Requests */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-700">{totalFirstAidRequests}</h2>
        <p className="text-gray-500">First Aid Requests</p>
      </div>
    </div>
  );
};

export default PatientDashboard;

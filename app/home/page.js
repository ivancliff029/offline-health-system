// pages/home.js
import React from 'react';
import Dashboard from '../components/Dashboard';
import PatientDashboard from '../components/PatientsDashboard';

const Home = () => {

  const totalPatients = 150; // Example data
  const ongoingRequests = 30; // Example data
  const totalConsultations = 75; // Example data
  const totalFirstAidRequests = 45; 

  return (
    <>
    <Dashboard>
        <h2 className="text-2xl font-bold">Home Page</h2>
        <PatientDashboard 
          totalPatients={totalPatients}
          ongoingRequests={ongoingRequests}
          totalConsultations={totalConsultations}
          totalFirstAidRequests={totalFirstAidRequests}
        />
    </Dashboard>
    </>
  )
};

export default Home;

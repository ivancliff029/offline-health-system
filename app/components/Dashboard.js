"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';

const Dashboard = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
    <Navbar />
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 mt-20 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button onClick={toggleSidebar} className="md:hidden">
            X
          </button>
        </div>
        <nav className="p-4">
          <ul>
            <li className="py-2 hover:bg-gray-200">
              <Link href="/home" onClick={toggleSidebar}>Home</Link>
            </li>
            <li className="py-2 hover:bg-gray-200">
              <Link href="/profile" onClick={toggleSidebar}>Profile</Link>
            </li>
            <li className="py-2 hover:bg-gray-200">
              <Link href="/settings" onClick={toggleSidebar}>Settings</Link>
            </li>
            <li className="py-2 hover:bg-gray-200">
              <Link href="/logout" onClick={toggleSidebar}>Logout</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`flex-1 md:ml-64 p-4 transition-all duration-300 ease-in-out ${sidebarOpen ? 'opacity-50' : 'opacity-100'}`}>
        <button onClick={toggleSidebar} className="md:hidden mb-4 bg-blue-500 text-white px-4 py-2 rounded">
          Open Sidebar
        </button>
        <div className="bg-white p-4 rounded shadow">
          {children}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Dashboard;

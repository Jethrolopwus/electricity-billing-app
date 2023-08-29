import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;

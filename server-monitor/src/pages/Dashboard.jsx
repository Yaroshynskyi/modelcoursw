import React from 'react';
import ServerCard from '../components/ServerCard';
import { MOCK_SERVERS } from '../data/mockData';

const Dashboard = () => {
  const total = MOCK_SERVERS.length;
  const critical = MOCK_SERVERS.filter(s => s.status === 'critical').length;
  const online = MOCK_SERVERS.filter(s => s.status === 'online').length;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>System Overview</h1>
        <div className="stats-row">
          <div className="stat-box">Total Servers: <strong>{total}</strong></div>
          <div className="stat-box success">Online: <strong>{online}</strong></div>
          <div className="stat-box danger">Critical Alerts: <strong>{critical}</strong></div>
        </div>
      </header>

      <div className="server-grid">
        {MOCK_SERVERS.map(server => (
          <ServerCard key={server.id} server={server} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
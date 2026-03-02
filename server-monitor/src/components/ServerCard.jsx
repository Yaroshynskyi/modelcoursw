import React from 'react';

const ServerCard = ({ server }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return '#22c55e'; 
      case 'critical': return '#ef4444'; 
      case 'offline': return '#6b7280'; 
      default: return '#3b82f6';
    }
  };

  return (
    <div className="server-card" style={{ borderColor: server.status === 'critical' ? '#ef4444' : 'transparent' }}>
      <div className="card-header">
        <div className="status-indicator">
          <span className="dot" style={{ backgroundColor: getStatusColor(server.status) }}></span>
          <span className="status-text">{server.status.toUpperCase()}</span>
        </div>
        <span className="server-ip">{server.ip}</span>
      </div>
      
      <h3>{server.name}</h3>
      <p className="region">{server.region}</p>

      <div className="metrics-grid">
        <div className="metric">
          <span>CPU</span>
          <div className="bar-bg">
            <div className="bar-fill" style={{ width: `${server.cpu}%`, backgroundColor: server.cpu > 90 ? '#ef4444' : '#3b82f6' }}></div>
          </div>
          <span className="metric-val">{server.cpu}%</span>
        </div>
        
        <div className="metric">
          <span>RAM</span>
          <div className="bar-bg">
            <div className="bar-fill" style={{ width: `${server.ram}%` }}></div>
          </div>
          <span className="metric-val">{server.ram}%</span>
        </div>
      </div>

      <div className="card-footer">
        <span>TEMP: {server.temp}°C</span>
        <span>UPTIME: {server.uptime}</span>
      </div>
    </div>
  );
};

export default ServerCard;
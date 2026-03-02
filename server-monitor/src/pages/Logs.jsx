import React from 'react';
import { MOCK_LOGS } from '../data/mockData';

const Logs = () => {
  const getLevelColor = (level) => {
    switch(level) {
      case 'ERROR': return '#ef4444';
      case 'WARN': return '#f59e0b';
      case 'INFO': return '#3b82f6';
      default: return '#9ca3af';
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>System Logs</h1>
      </header>

      <div className="logs-console">
        {MOCK_LOGS.map(log => (
          <div key={log.id} className="log-entry">
            <span className="log-time">[{log.time}]</span>
            <span className="log-level" style={{ color: getLevelColor(log.level) }}>{log.level}</span>
            <span className="log-source">{log.source}:</span>
            <span className="log-message">{log.message}</span>
          </div>
        ))}
        <div className="log-entry">
          <span className="log-cursor">&gt;_</span>
        </div>
      </div>
    </div>
  );
};

export default Logs;
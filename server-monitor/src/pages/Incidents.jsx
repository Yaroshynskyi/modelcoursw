import React from 'react';
import { MOCK_INCIDENTS } from '../data/mockData';

const Incidents = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Incident Management</h1>
      </header>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Server</th>
              <th>Issue Type</th>
              <th>Severity</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_INCIDENTS.map(inc => (
              <tr key={inc.id}>
                <td>#{inc.id}</td>
                <td style={{ fontWeight: 'bold' }}>{inc.server}</td>
                <td>{inc.type}</td>
                <td>
                  <span className={`badge ${inc.severity}`}>{inc.severity.toUpperCase()}</span>
                </td>
                <td>{inc.time}</td>
                <td>
                  <span className={`status-dot ${inc.status === 'Open' ? 'danger' : 'success'}`}></span>
                  {inc.status}
                </td>
                <td>
                  <button className="action-btn">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Incidents;
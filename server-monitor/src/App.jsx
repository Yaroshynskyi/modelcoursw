import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Incidents from './pages/Incidents';
import Logs from './pages/Logs';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'incidents': return <Incidents />;
      case 'logs': return <Logs />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="app-layout">
      <nav className="sidebar">
        <div className="brand">ServerMon v1.0</div>
        
        <div 
          className={`nav-item ${currentView === 'dashboard' ? 'active' : ''}`}
          onClick={() => setCurrentView('dashboard')}
        >
          Dashboard
        </div>
        
        <div 
          className={`nav-item ${currentView === 'incidents' ? 'active' : ''}`}
          onClick={() => setCurrentView('incidents')}
        >
          Incidents <span className="badge-mini">2</span>
        </div>
        
        <div 
          className={`nav-item ${currentView === 'logs' ? 'active' : ''}`}
          onClick={() => setCurrentView('logs')}
        >
          Logs
        </div>
        
        <div className="nav-item">Settings</div>
      </nav>
      
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;